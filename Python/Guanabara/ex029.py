from time import sleep
vel = int(input('Olá quantos Km/h você está dirigindo? '))
sleep(1)
if vel > 80:
    print(f'Bem meu amigo você está muito rapido \nVocê foi multado por {(vel-80)*7:.2f} R$')
else:
    print(f'Muito bem pode continuar!')