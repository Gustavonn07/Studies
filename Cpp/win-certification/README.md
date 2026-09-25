### 2.1 GetSignerCertificate

---

##### 2.1.1 Resumo geral:

```cpp
PCCERT_CONTEXT GetSignerCertificate(WINTRUST_DATA &WinTrustData)
```

- Possui a finalidade de pegar, a partir do estado interno do **WinVerifyTrust**, o certificado do assinante do arquivo.
- Retorna o tipo PCCERT_CONTEXT.
  > Representa um ponteiro para um CERT_CONTEXT, que contém os dados de um certificado digital.
- WINTRUST_DATA &WinTrustData recebe uma referência para a estrutura que foi usada pelo **WinVerifyTrust**.

---

##### 2.1.2 Desestruturando:

```cpp
if (WinTrustData.hWVTStateData == NULL)
{
    return nullptr;
}
```

- Verifica se existe estado do WinTrust.
- hWVTStateData é um handle/ponteiro para o estado interno criado pelo **WinVerifyTrust**.
  > Vem do WinTrustData.dwStateAction, Esse estado é necessário porque é através dele que conseguimos acessar informações mais detalhadas da verificação, como o certificado.

<br />

```cpp
CRYPT_PROVIDER_DATA *pProvData =
    WTHelperProvDataFromStateData(
        WinTrustData.hWVTStateData);
```

- Obtém os dados do provider.
- A função _WTHelperProvDataFromStateData()_ pega o estado e acessa ele como CRYPT_PROVIDER_DATA\*.
  > CRYPT_PROVIDER_DATA\* possui informações que o provider de confiança utiliou durante a verificação.

<br />

```cpp
if (pProvData == nullptr)
{
  return nullptr;
}
```

- Verifica se conseguiu obter os dados do provider, caso não encontre então a função não deve continuar.

<br />

```cpp
CRYPT_PROVIDER_SGNR *pProvSigner =
    WTHelperGetProvSignerFromChain(
        pProvData,
        0,
        FALSE,
        0);
```

- Obtém o assinante com função _WTHelperGetProvSignerFromChain()_, retornando um assinante dentro da cadeia de informações do provider.
  > É passado como 01. parâmetro **pProvData** que seria o CRYPT_PROVIDER_DATA\*,
  > É passado como 02. parâmetro **0** que seria o índice do assinante,
  > É passado como 03. parâmetro **FALSE** que seria afirmando que não está pedindo um outro assinante,
  > É passado como 04. parâmetro **0** que é o índice da cadeia/elemento correspondente conforme a API.
- Retorna CRYPT_PROVIDER_SGNR\* que representa as informações do assinante.

<br />

```cpp
if (pProvSigner == nullptr)
{
    return nullptr;
}
```

- Verifica se conseguiu obter os dados do assinante, caso não encontre então a função não deve continuar.

<br />

```cpp
CRYPT_PROVIDER_CERT *pProvCert =
    WTHelperGetProvCertFromChain(
        pProvSigner,
        0);
```

- Obtém o certificado do assinante.
- A função _WTHelperGetProvCertFromChain()_ coleta um certificado da cadeia associada ao assinante.
  > É passado como 01. parâmetro **pProvSigner** que seria o assinante,
  > É passado como 02. parâmetro **0** que seria o primeiro certificado da cadeia.
- Retorna CRYPT_PROVIDER_CERT* que contém as informações daquele certificado.

<br />

```cpp
if (pProvCert == nullptr)
{
    return nullptr;
}
```

- Verifica se conseguiu obter o certificado, caso não encontre então a função não deve continuar.

<br />

```cpp
return pProvCert->pCert;
```

- Retorna o certificado.

---