from time import sleep
start = int(input('Qual o 1° valor?(par) '))
fim = int(input('Qual o valor final? '))
print(f'Vamos contar os pares de {start} a {fim}:')
for c in range(start,fim+1,2):
    print(c)
    sleep(0.3)