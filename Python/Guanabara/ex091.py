from random import randint
from time import sleep
from operator import itemgetter

ordem = []

jogos = {
    'Jogador 1': randint(1, 6),
    'Jogador 2': randint(1, 6),
    'Jogador 3': randint(1, 6),
    'Jogador 4': randint(1, 6)
}
for k, v in jogos.items():
    print(f'O {k} tirou o valor {v}')
    sleep(1)

rank = (sorted(jogos.items(), key=itemgetter(1), reverse= True))
print('-='*20)
for i, v in enumerate(rank):
    print(f'O {i + 1}° lugar foi o {v[0]} com {v[1]} pontos')
    sleep(1)