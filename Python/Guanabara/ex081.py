lista = []
comando = 's'
#Loop
while comando == 's':
    valor = int(input('Digite um valor: '))
    lista.append(valor)

    comando = input('Quer continuar? [s] ou [n]: ').strip().lower()

    #Comando errado
    if comando != 's' and comando != 'n':
        while comando != 's' and comando != 'n':
            comando = input('Esse comando não é aceitável. \nQuer continuar? [s] ou [n]: ').strip().lower()
else:
    #Coleta de dados
    print(f'Os valores da lista são {sorted(lista)}')
    print(f'Existem {len(lista)} elementos na lista')
    if 5 in lista:
        print('O valor 5 esta na lista')
    else:
        print('O valor 5 não esta na lista')