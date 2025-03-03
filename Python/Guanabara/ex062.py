#Progressão Aritimética
termo = num = int(input('Olá qual o número? '))
razao = int(input('Qual a razão? '))
rep = 0
mais = 1
print(f'Os valores da progressão aritimética são: ')
while rep < 10:
    rep += 1
    print(f'{termo}', end= '')
    print(' -> ' if rep < 10 else '', end='')
    termo += razao
while mais != 0:
    mais = int(input('\nVocê quer continuar? caso sim qual o valor? (digite 0 para parar): '))
    reps = 0
    while reps != mais:
        reps += 1
        print(f'{termo}', end='')
        print(' -> ' if reps < mais else '', end='')
        termo += razao
else:
    print('FIM')