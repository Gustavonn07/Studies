idade18 = homens = mulherm20 = 0
while True:
    print('=' * 21)
    print('FAÇA O SEU CADASTRO')
    print('=' * 21)
    nome = str(input('Qual o seu nome? ')).strip().title()
    sexo = int(input('Masculino [1] ou Feminino [2] '))
    if sexo == 1:
        homens += 1
    idade = int(input('Qual a sua idade? '))
    if idade > 18:
        idade18 += 1
    comand = int(input('Você quer continuar? [1] Sim, [2] Não: '))
    if sexo == 2 and idade < 20:
        mulherm20 += 1
    if comand == 2:
        break
print(f'O número de pessoas maior de 18 anos é de: {idade18}')
print(f'O número de homens é de: {homens}')
print(f'O número de mulheres menor que 20 anos é de: {mulherm20}')