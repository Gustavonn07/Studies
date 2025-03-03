from datetime import datetime
idades = int(datetime.today().year - 18)
maior = 0
menor = 0
for c in range(1,8):
    idade = int(input('Qual o ano do nascimento?: '))
    if idade >= idades:
        maior += 1
    else:
        menor += 1
print(f'O número de menores de idade seria de \033[36m{menor}\033[m\nO número de maiores de idade seria de \033[36m{maior}\033[m.')
