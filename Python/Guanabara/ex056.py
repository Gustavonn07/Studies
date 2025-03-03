mediaidade = 0
nomevelho = ''
maioridadehomem = 0
somaidade = 0
totmulher20 = 0
for c in range(1,5):
    print(f'----- {c}° PESSOA -----')
    nomes = str(input('Qual o seu nome? ')).strip().title()
    idades = int(input('Qual a sua idade? '))
    generos = str(input('Qual o seu gênero? [M/F]: ')).strip().upper()
    somaidade += idades
    if c == 1 and generos == 'M':
        nomevelho = nomes
        maioridadehomem = idades
    if generos == 'M' and idades > maioridadehomem:
        nomevelho = nomes
        maioridadehomem = idades
    if generos == 'F' and idades < 20:
        totmulher20 += 1
mediaidade = somaidade / 4
print(f'A média das idades é {mediaidade}.')
print(f'O homem mais velho é o {nomevelho} com {maioridadehomem} anos de vida.')
print(f'O total de mulheres com < 20 anos é de {totmulher20}')



