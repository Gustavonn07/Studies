from random import randint
from time import sleep
score = 0
n = 0
tentativa = 0
print('Vou escolher um número. Hmmmmm certo pensei, você consegue advinhar qual? (está entre 1 e 10)')
sleep(1)
n = randint(1,10)
tentativa = int(input('Qual número eu pensei? '))
score += 1
while tentativa != n:
    tentativa = int(input('Errado, vamos tente de novo: '))
    score += 1
if tentativa == n:
    print(f'ACERTOU!!! \nVocê só precisou de {score} tentativas!')