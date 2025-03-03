num = int(input('Olá digite um número inteiro: '))
esc = int(input('Escolha uma base de conversão: \nBinário [1] \nOctal [2] \nHexadecimal [3] \n'))
if esc == 1:
    print(f'O valor de {num} convertido em Binário = {bin(num)[2:]}')
elif esc == 2:
    print(f'O valor de {num} convertido em Octal = {oct(num)[2:]}')
elif esc == 3:
    print(f'O valor de {num} convertido em Hexadecimal = {hex(num)[2:]}')
else:
    print('Error')