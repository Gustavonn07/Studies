from time import sleep
from random import randint
print('Vamos jogar Jokenpô?')
sleep(1)
py = int(input('Pedra [1] \nPapel [2] \nTesoura[3] \nQual você escolhe? '))
sleep(1)
comp = randint(1,3)
print('JO')
sleep(1)
print('KEN')
sleep(1)
print('PÔ')
if py == comp:
    print('Empatou')
elif py == 1 and comp == 2:
    print('Você Perdeu')
elif py == 2 and comp == 3:
    print('Você Perdeu')
elif py == 3 and comp == 1:
    print('Você Perdeu')
elif py == 1 and comp == 3:
    print('Você Ganhou')
elif py == 2 and comp == 1:
    print('Você Ganhou')
elif py == 3 and comp == 2:
    print('Você Ganhou')