from math import factorial
n = fator = int(input('Qual o valor? '))
print(f'{fator}! = {fator}',end=' ')
while n > 1:
    n -= 1
    print('x' if n != 0 else ' ', end=' ')
    print(f'{n}', end=' ')
print(f'= {factorial(fator)}')
