palavra = str(input('Olá qual a palavra/frase? ')).strip().replace(' ','').upper()
palindromo =''
for c in range(len(palavra) - 1,-1,-1):
   palindromo += palavra[c]
print(palavra, palindromo)
if palavra == palindromo:
    print('Essa frase/palavra é palindromo')
else:
    print('Não é um palindromo')