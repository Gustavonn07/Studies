val1 = float(input('1° valor: '))
val2 = float(input('2° valor: '))
val3 = float(input('3° valor: '))
vall = [val1, val2, val3]
vall.sort()
if val1 == val2 ==val3:
    print('Os 3 valores são iguais')
else:
    print(f'O maior valor foi: {vall[2]}')
    print(f'O menor valor foi: {vall[0]}')


