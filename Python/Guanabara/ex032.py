import datetime
ano = int(input('Qual o ano que vc quer saber se é bissexto? '))
if int(ano) == 0:
    ano = datetime.date.today().year
    if int(ano) % 4 or int(ano) % 400 == 0:
        print(f'O ano de {ano} é bissexto.')
    else:
        print(f'O ano de {ano} não é bissexto.')
else:
    if int(ano) % 4 or int(ano) % 400 == 0:
        print(f'O ano de {ano} é bissexto.')
    else:
        print(f'O ano de {ano} não é bissexto.')