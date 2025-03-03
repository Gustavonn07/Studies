numeros = [[], []]

#Loop
for c in range(7):
    valor = int(input(f'Me diga o {c + 1}° valor: '))
    if valor % 2 == 0:
        numeros[0].append(valor)
    else:
        numeros[1].append(valor)

#Final
print(f'Os valores pares são {sorted(numeros[0])}')
print(f'Os valores impares são {sorted(numeros[1])}')

