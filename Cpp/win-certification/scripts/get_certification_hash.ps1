param(
    [Parameter(Mandatory = $true)]
    [string]$File
)

$Signature = Get-AuthenticodeSignature -FilePath $File

if ($Signature.Status -ne "Valid") {
    throw "The file signature is not valid."
}

$Cert = $Signature.SignerCertificate

$Hash = $Cert.Thumbprint

# Write-Host "Certificate SHA-1:"
# Write-Host $Hash

$SHA256 = [System.Security.Cryptography.SHA256]::Create()

# Array de bytes
$CertHash256 = $SHA256.ComputeHash($Cert.RawData)

# Vira Hexadecimal
$Hash256 = [System.BitConverter]::ToString($CertHash256).Replace("-", "")

$SHA256.Dispose()

# Write-Host "Certificate SHA-256:"
# Write-Host $Hash256

"Certificate SHA-256: $Hash256`nCertificate SHA-1: $Hash" |
    Out-File ".\File_Hashs.txt" -Encoding ascii
