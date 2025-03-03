dados = {
    'nome': '',
    'gols': 0
}

#Coleta de dados:
dados['nome'] = str(input('Olá qual o nome do jogador? ')).strip().title()
partidas = int(input(f'Quantas partidas {dados["nome"]} jogou? '))
for c in range(partidas):
    dados[f'partidas-gols{c}'] = int(input(f'Quantos gols o jogador {dados["nome"]} fez na partida {c + 1}? '))
    dados['gols'] += dados[f'partidas-gols{c}']

#Apresentação:
print('-='*30)
for c in range(partidas):
    print(f'O jogador {dados["nome"]} na sua {c + 1}° partida fez: {dados[f"partidas-gols{c}"]} gols')
print(f'No total teve {dados["gols"]} em sua carreira')