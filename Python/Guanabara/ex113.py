def leiaInt():
    ok = False
    while ok != True:
        try:
            inteiro = int(input('Diga um valor inteiro: '))
            ok = True
        except:
            print('\033[31mValor não é valido, tente novamente!\033[m')
        else:
            print('\033[32mValor validado!\033[m')
            return inteiro

def leiaFloat():
    ok = False
    while ok != True:
        try:
            floate = float(input('Diga um valor racional: '))
            ok = True
        except:
            print('\033[31mValor não é valido, tente novamente!\033[m')
        else:
            print('\033[32mValor validado!\033[m')
            return floate

inteiro = leiaInt()
floate = leiaFloat()

print(f'O valor inteiro foi: {inteiro}\nO valor racional foi: {floate}')