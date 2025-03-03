n = soma = cont = 0
while True:
    n = int(input('Qual o valor que você quer? (0 para parar) '))
    if n == 0:
        break
    else:
        soma += n
        cont += 1
print(f'A soma dos {cont} valores colocados é de {soma}')