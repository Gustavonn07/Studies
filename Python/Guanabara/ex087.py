lista = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
colunas = maior = pares = 0

#Valores
#linhas
for c in range(3):
    #colunas
    for i in range(3):
        lista[c][i] = int(input(f'Olá diga o valor [{c}, {i}]: '))
        if lista[c][i] % 2 == 0:
            pares += lista[c][i]
        if i == 2:
            colunas += lista[c][2]
        if c == 1:
            maior = lista[1][i]
            if i == 1 and lista[c][i] > maior:
                maior = lista[c][i]
#Dados
# Imprimir a matriz
for i in range(3):
    for j in range(3):
        print(f'{lista[i][j]:>5}', end='')
    print()
print(f'A soma dos valores pares é {pares}')
print(f'A soma dos numeros da coluna 3 é {colunas}')
print(f'O maior valor na 2 linha é {maior}')