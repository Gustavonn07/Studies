def escreva(frase):
    print('-' * (len(frase) + 2))
    print(f' {frase.capitalize().strip()}')
    print('-' * (len(frase) + 2))

frase = str(input('Olá diga uma frase: '))
escreva(frase)