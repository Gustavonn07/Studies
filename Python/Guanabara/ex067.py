print('='*26)
print('\033[36mVamos ver as tabuadas?\033[m')
print('='*26)
while True:
    n = int(input('Qual o valor que você quer a tabuada? (N° negativo para parar): '))
    if n < 0:
        break
    else:
        for c in range(1,11):
            print(f'{n} x {c} = {n*c}')