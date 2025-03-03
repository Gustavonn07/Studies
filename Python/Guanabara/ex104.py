def leiaint(msg):
    while True:
        n = str(input(msg)).strip()
        if n.isnumeric():
            n = int(n)
            return n
            break
        else:
            print('\033[31mValor não reconhecido tente novamente\033[m')

n = leiaint('Digite um número: ')
print(f'O número digitado foi: {n}')