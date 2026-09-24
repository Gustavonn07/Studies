#define _UNICODE 1
#define UNICODE 1

#include <tchar.h>
#include <stdio.h>
#include <stdlib.h>
#include <windows.h>

#include <Softpub.h>
#include <wincrypt.h>
#include <wintrust.h>

#include <vector>
#include <string>

#pragma comment(lib, "wintrust")
#pragma comment(lib, "crypt32")

// SHA-1/thumbprint do certificado conhecido.
constexpr wchar_t KNOWN_THUMBPRINT[] =
    L"B3F1E372C0C51897404A297EBC8EE7E6E5C3A052";

// Obtém o certificado utilizado pelo signer do arquivo.
PCCERT_CONTEXT GetSignerCertificate(WINTRUST_DATA &WinTrustData)
{
  if (WinTrustData.hWVTStateData == NULL)
  {
    return nullptr;
  }

  CRYPT_PROVIDER_DATA *pProvData =
      WTHelperProvDataFromStateData(
          WinTrustData.hWVTStateData);

  if (pProvData == nullptr)
  {
    return nullptr;
  }

  CRYPT_PROVIDER_SGNR *pProvSigner =
      WTHelperGetProvSignerFromChain(
          pProvData,
          0,
          FALSE,
          0);

  if (pProvSigner == nullptr)
  {
    return nullptr;
  }

  CRYPT_PROVIDER_CERT *pProvCert =
      WTHelperGetProvCertFromChain(
          pProvSigner,
          0);

  if (pProvCert == nullptr)
  {
    return nullptr;
  }

  return pProvCert->pCert;
}

BOOL VerifyEmbeddedSignature(LPCWSTR pwszSourceFile)
{
  LONG lStatus;
  DWORD dwLastError;

  WINTRUST_FILE_INFO FileData;

  memset(
      &FileData,
      0,
      sizeof(FileData));

  FileData.cbStruct = sizeof(FileData);
  FileData.pcwszFilePath = pwszSourceFile;
  FileData.hFile = NULL;
  FileData.pgKnownSubject = NULL;

  GUID WVTPolicyGUID = WINTRUST_ACTION_GENERIC_VERIFY_V2;

  WINTRUST_DATA WinTrustData;

  memset(
      &WinTrustData,
      0,
      sizeof(WinTrustData));

  WinTrustData.cbStruct = sizeof(WinTrustData);

  WinTrustData.pPolicyCallbackData = NULL;
  WinTrustData.pSIPClientData = NULL;
  WinTrustData.dwUIChoice = WTD_UI_NONE;
  WinTrustData.fdwRevocationChecks = WTD_REVOKE_NONE;
  WinTrustData.dwUnionChoice = WTD_CHOICE_FILE;
  WinTrustData.dwStateAction = WTD_STATEACTION_VERIFY;
  WinTrustData.hWVTStateData = NULL;
  WinTrustData.pwszURLReference = NULL;
  WinTrustData.dwUIContext = 0;
  WinTrustData.pFile = &FileData;

  lStatus = WinVerifyTrust(
      NULL,
      &WVTPolicyGUID,
      &WinTrustData);

  switch (lStatus)
  {
  case ERROR_SUCCESS:
  {
    wprintf_s(
        L"The file \"%s\" is signed and the signature "
        L"was verified.\n",
        pwszSourceFile);

    // Obtém o certificado utilizado para assinar o arquivo.
    PCCERT_CONTEXT cert =
        GetSignerCertificate(WinTrustData);

    if (cert == nullptr)
    {
      wprintf_s(
          L"Could not obtain signer certificate.\n");

      break;
    }

    // Primeiro obtemos o tamanho necessário para armazenar
    // o SHA-1 do certificado.
    DWORD hashSize = 0;

    BOOL result =
        CertGetCertificateContextProperty(
            cert,
            CERT_HASH_PROP_ID,
            nullptr,
            &hashSize);

    if (!result)
    {
      wprintf_s(
          L"Could not obtain certificate thumbprint.\n");

      CertFreeCertificateContext(cert);

      break;
    }

    // Aloca memória para armazenar os bytes do SHA-1.
    //
    // SHA-1 possui normalmente 20 bytes.
    std::vector<BYTE> hash(hashSize);

    // Obtém efetivamente o SHA-1/thumbprint do certificado.
    result =
        CertGetCertificateContextProperty(
            cert,
            CERT_HASH_PROP_ID,
            hash.data(),
            &hashSize);

    if (!result)
    {
      wprintf_s(
          L"Could not obtain certificate thumbprint.\n");

      CertFreeCertificateContext(cert);

      break;
    }

    // Converte os bytes do SHA-1 para hexadecimal.
    //
    // Exemplo:
    //
    //     B3 F1 E3 72
    //
    // vira:
    //
    //     B3F1E372
    std::wstring thumbprint;

    for (DWORD i = 0; i < hashSize; ++i)
    {
      wchar_t buffer[3];

      swprintf_s(
          buffer,
          L"%02X",
          hash[i]);

      thumbprint += buffer;
    }

    // Mostra o SHA-1 encontrado no certificado.
    wprintf_s(
        L"Signer certificate SHA-1: %s\n",
        thumbprint.c_str());

    // Compara o SHA-1 encontrado com o SHA-1 conhecido.
    if (thumbprint == KNOWN_THUMBPRINT)
    {
      wprintf_s(
          L"The signer certificate matches "
          L"the known certificate.\n");
    }
    else
    {
      wprintf_s(
          L"The signer certificate does NOT match "
          L"the known certificate.\n");
    }

    // Libera o contexto do certificado.
    CertFreeCertificateContext(cert);

    break;
  }

  case TRUST_E_NOSIGNATURE:
  {
    dwLastError = GetLastError();

    if (
        TRUST_E_NOSIGNATURE == dwLastError ||
        TRUST_E_SUBJECT_FORM_UNKNOWN == dwLastError ||
        TRUST_E_PROVIDER_UNKNOWN == dwLastError)
    {
      wprintf_s(
          L"The file \"%s\" is not signed.\n",
          pwszSourceFile);
    }
    else
    {
      wprintf_s(
          L"An unknown error occurred trying to "
          L"verify the signature of the \"%s\" file.\n",
          pwszSourceFile);
    }

    break;
  }

  case TRUST_E_EXPLICIT_DISTRUST:
  {
    wprintf_s(
        L"The signature is present, but specifically "
        L"disallowed.\n");

    break;
  }

  case TRUST_E_SUBJECT_NOT_TRUSTED:
  {
    wprintf_s(
        L"The signature is present, but not trusted.\n");

    break;
  }

  case CRYPT_E_SECURITY_SETTINGS:
  {
    wprintf_s(
        L"CRYPT_E_SECURITY_SETTINGS - The hash "
        L"representing the subject or the publisher wasn't "
        L"explicitly trusted by the admin and admin policy "
        L"has disabled user trust.\n");

    break;
  }

  default:
  {
    wprintf_s(
        L"Error is: 0x%x.\n",
        lStatus);

    break;
  }
  }

  // Libera o estado criado pela chamada de verificação.
  WinTrustData.dwStateAction = WTD_STATEACTION_CLOSE;

  lStatus = WinVerifyTrust(
      NULL,
      &WVTPolicyGUID,
      &WinTrustData);

  return lStatus == ERROR_SUCCESS;
}

int wmain(
    int argc,
    wchar_t *argv[])
{
  if (argc <= 1)
  {
    wprintf_s(
        L"Usage: %s <file>\n",
        argv[0]);

    return 1;
  }

  BOOL result =
      VerifyEmbeddedSignature(argv[1]);

  return result ? 0 : 1;
}