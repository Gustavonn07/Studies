lista = [[], [], [], [], [], [], [], [], []]
cont = 0

#Valores
for c in range(3):
    for i in range(3):
        valor = str(input(f'Olá diga o valor [{c}, {i}]: '))
        #Cont = posição da lista / [:] copia para não repetir
        lista[cont].append(valor[:])
        cont += 1

#Final
print(f'-=-'*6)
print(f'{lista[0]} {lista[1]} {lista[2]}\n{lista[3]} {lista[4]} {lista[5]}\n{lista[6]} {lista[7]} {lista[8]}')