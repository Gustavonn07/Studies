valor = int(input('Qual o valor a ser sacado? '))
notas50 = notas20 = notas10 = notas1 = 0
while True:
    if valor >= 50:
        valor -= 50
        notas50 += 1
    else:
        if valor >= 20:
            valor -= 20
            notas20 += 1
        else:
            if valor >= 10:
                valor -= 10
                notas10 += 1
            else:
                if valor >= 1:
                    valor -= 1
                    notas1 += 1
    if valor == 0:
        break
print(f'Foi preciso {notas50} notas de 50, \n{notas20} notas de 20, \n{notas10} notas de 10, \n{notas1} moedas de 1 real.')