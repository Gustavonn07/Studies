not1 = float(input('Qual foi a sua 1° nota? '))
not2 = float(input('Qual foi a sua 2° nota? '))
media = (not1+not2)/2
if media > 6.9:
    print('APROVADO')
elif media > 4.9 and media < 7:
    print('RECUPERAÇÃO')
else:
    print('REPROVADO')