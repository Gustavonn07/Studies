vogais = ('a', 'e', 'i', 'o', 'u')
palavras = ('Viajar', 'Elegante', 'Animal', 'Carro', 'Brasileiro', 'Abacate')
#Contabiliza em str por comparar com um str sem range
for palavra in palavras:
    print(f'Vogais da palavra ({palavra}): ', end='')
    for letra in palavra:
        if letra.lower() in vogais:
            print(f'\033[1;33m{letra.lower()}\033[m', end=' ')
    print()