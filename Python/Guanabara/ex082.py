lista = []
par = []
impar = []
#Loop
while True:
    valor = int(input('Diga um valor: '))
    lista.append(valor)
    if valor % 2 == 0:
        par.append(valor)
    else:
        impar.append(valor)

    #Comando
    comando = int(input('[1] Continuar / [2] Parar: '))
    if comando == 2:
        break

    #Comando errado
    elif comando != 1 and comando != 2:
        while comando != 1 and comando != 2:
            comando = int(input('Comando não reconhecido. \n[1] Continuar / [2] Parar: '))

        if comando == 2:
            break

#Coleta de dados
print(f'A sua lista é essa: {sorted(lista)}')
print(f'Os valores pares são esses: {sorted(par)}')
print(f'Os valores impares são esses: {sorted(impar)}')