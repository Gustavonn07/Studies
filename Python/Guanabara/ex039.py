from datetime import datetime
nasc = int(input('Qual foi o ano de seu nascimento? '))
idade = datetime.today().year - nasc
if idade == 18:
    print('Está na hora de você se alistar!')
elif idade < 18:
    print(f'Ainda não chegou sua vez de se alistar, falta/faltam {18 - idade} ano/anos!')
    print(f'Seu alistamento será em {idade + nasc}')
else:
    print(f'Você ja deveria estar alistado faz {idade - 18} ano/anos!')
    print(f'Seu alistamento foi em {nasc + 18}')