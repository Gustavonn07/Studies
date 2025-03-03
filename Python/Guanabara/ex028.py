from random import randint
from emoji import emojize
from time import sleep
numadv = int(input(f'Olá tente advinhar um número que eu vou pensar \nDica: está entre os números 0 a 5: '))
print('Pensando...')
sleep(2)
num = randint(0,5)
if numadv > 5:
    print(emojize(f'Você não leu a dica? Eu so escolho um número entre 0 e 5 :skull:'))
else:
    if num == numadv:
        print(emojize(f'Parabens você acertou o número que eu estava pensando :beaming_face_with_smiling_eyes: '))
    else:
        print(emojize(f'Haha você errou, o número que eu pensei foi {num} :face_with_tears_of_joy:'))