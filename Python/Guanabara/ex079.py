comando = 's'
lista = []

while comando == 's':
    valor = int(input('Digite um valor: '))
    lista.append(valor)

    comando = input('Quer continuar? [s] ou [n]: ').strip().lower()

    if comando != 's' and comando != 'n':
        while comando != 's' and comando != 'n':
            comando = input('Esse comando não é aceitável. \nQuer continuar? [s] ou [n]: ').strip().lower()

print(f'Sua lista é {sorted(lista)}')