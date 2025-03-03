def ajuda(com):
    from time import sleep
    while True:
        sleep(1)
        help(com)
        comand = int(input('\033[34mVocê quer continuar? Sim(1) Não(Qualquer valor):\033[m '))
        if comand == 1:
            sleep(1)
            comando = str(input('Você precisa de ajuda com qual \033[32mComando\033[m ou \033[32mBiblioteca?\033[m: '))
            sleep(1)
            help(comando)
        else:
            sleep(1)
            print('Tenha um bom dia!')
            sleep(0.5)
            break

def titulo():
    print(f'\033[46:30m{"-="*81}\n {"Bem-Vindo ao PyHelp":>85}\n{"-="*81}\033[m')

titulo()
comando = str(input('Você precisa de ajuda com qual \033[32mComando\033[m ou \033[32mBiblioteca?\033[m: '))
ajuda(comando)