lista = []
#Loop

for c in range(0, 5):
    valor = int(input('Digite um valor: '))
    #Adicionar o valor a lista e deixar em ordem crescente
    lista.append(valor)
    lista2 = sorted(lista)
    print(f'O {valor} está na posição {lista2.index(valor)}')

else:
    print(f'Os valores da lista são {lista2}')