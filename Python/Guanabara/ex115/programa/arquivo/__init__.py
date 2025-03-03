from time import sleep

def arqExiste(nome):
    try:
        a = open(nome, 'rt')
        a.close()
    except FileNotFoundError:
        return False
    else:
        return True

def arqCriar(nome):
    try:
        a = open(nome, 'wt+')
        a.close()
        sleep(0.3)
    except:
        print('\033[31mERRO, não consegui criar o arquivo!\033[m')
    else:
        print('\033[32mArquivo criado com sucesso!\033[m')

def arqLer(nome):
    try:
        a = open(nome, 'rt')
    except:
        print('\033[31mERRO, não consegui ler o arquivo!\033[m')
    else:
        print(a.readlines())