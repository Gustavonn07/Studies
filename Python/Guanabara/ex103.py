def dados(nome = '<desconhecido>', gols = 0):
    print('-'*60)
    print(f'O jogador {nome.title().strip()} fez o total de {gols} gols em sua carreira')
    print('-'*60)

print('-'*60)
nome = str(input('Qual o nome do jogador? '))
if nome == '':
    nome = '<desconhecido>'

gol = str(input('Quantos gols ele marcou? '))
if gol.isnumeric():
    gol = int(gol)
else:
    gol = 0

dados(nome, gol)