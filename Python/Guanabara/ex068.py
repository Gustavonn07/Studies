from random import randint
from time import sleep
score = 0
while True:
    n = int(input('\033[36mQual o valor? \033[m'))
    sleep(0.5)
    esc = int(input('\033[36mPar [1] ou Impar[2] \033[m'))
    sleep(0.5)
    pc = randint (0,10)
    soma = n + pc
    if esc == 1 and soma % 2 == 0:
        score += 1
        print('Boa você acertou')
        sleep(0.5)
    if esc == 2 and soma % 2 != 0:
        score += 1
        print('Boa você acertou')
        sleep(0.5)
    if esc == 2 and soma % 2 == 0:
        print('Poxa você errou')
        sleep(0.5)
        break
    if esc == 1 and soma % 2 != 0:
        print('Poxa você errou')
        sleep(0.5)
        break
print(f'\033[32mSeu score foi de {score}\033[m')