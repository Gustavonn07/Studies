n = soma = rep = 0
comando = 'S'
max = 0
min = 999999
while comando == 'S':
    n = int(input('Qual o valor? '))
    comando = str(input('Você quer continuar (S/N): ')).strip().upper()
    soma += n
    rep += 1
    if n > max:
        max = n
    if n < min:
        min = n
print(f'A média dos valores é {soma/rep} \nO maior valor é {max} \nO menor valor é {min}')