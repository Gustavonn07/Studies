n = 0
soma = 0
while n != 999:
    n = int(input('Digite um número (999 para parar): '))
    if n == 999:
        break
    else:
        soma += n
print(f'A soma dos valores é de: {soma}')