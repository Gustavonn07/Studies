from time import sleep

def calculo(inicio, fim, passo):
    if passo > 0:
        print(inicio, end=' ')
        for c in range(inicio, fim, passo):
            valor = (c + passo)
            if valor >= fim + passo:
                sleep(0.3)
                break
            else:
                print(valor, end=' ')
                sleep(0.3)
    else:
        print(inicio, end=' ')
        for c in range(inicio, fim, passo):
            valor = (c + passo)
            if valor <= fim:
                print(valor, end=' ')
                sleep(0.3)
                break
            else:
                print(valor, end=' ')
                sleep(0.3)


print('O valor de inicio 1 até o 10 é de: ')
calculo(1, 10, 1)
print('\nO valor de inicio 20 até o -10, pulando de 2 em 2 é de: ')
calculo(20, -10, -2)
print(f'\nAgora é sua vez, me diga os valores de:')
sleep(0.5)
inicio = int(input('Inicio: '))
sleep(0.5)
fim = int(input('Fim: '))
sleep(0.5)
passo = int(input('Passo: '))
calculo(inicio, fim, passo)
