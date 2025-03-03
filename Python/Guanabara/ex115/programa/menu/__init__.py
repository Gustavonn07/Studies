from sys import exit
from time import sleep
import ex115.programa.arquivo as arquivo
arq = 'cursoemvideo.txt'


def menu():
    print('\033[36m-\033[m'*90)
    print(f'\033[36m{"Menu Principal":>49}\033[m')
    print('\033[36m-\033[m'*90)
    print('\033[33m1 -\033[m \033[34mVer pessoas cadastradas\033[m')
    print('\033[33m2 -\033[m \033[34mCadastrar nova Pessoa\033[m')
    print('\033[33m3 -\033[m \033[34mSair do sistema\033[m')
    print('\033[36m-\033[m'*90)
    while True:
        try:
            comando = int(input('\033[37mQual a sua opção?\033[m '))
            sleep(0.3)
            if comando not in [1, 2, 3]:
                print('\033[31mComando inválido. Tente novamente!\033[m')
                sleep(0.1)
            else:
                break
        except:
            print('\033[31mComando inválido. Tente novamente!\033[m')
            sleep(0.1)
    return comando

def pagina(comando):
    if comando == 1:
        sleep(0.3)
        print('\033[36m-\033[m' * 90)
        print(f'{"Pessoas Cadastradas":>57}')
        print(arquivo.lerArq(arq))
        print('\033[36m-\033[m' * 90)
        sleep(0.3)
    if comando == 2:
        sleep(0.3)
        print('\033[36m-\033[m' * 90)
        print(f'{"Opção 02":>47}')
        print('\033[36m-\033[m' * 90)
        sleep(0.3)
    if comando == 3:
        sleep(0.3)
        print('\033[36m-\033[m' * 90)
        print(f'{"Saindo do programa, até logo...":>57}')
        print('\033[36m-\033[m' * 90)
        sleep(0.3)
        exit()