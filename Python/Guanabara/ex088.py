from random import randint
valores = []

comando = int(input('Olá quantos jogos você quer? '))

#loop
for c in range(comando):
    novo_jogo = []
    for i in range(6):
        novo_jogo.append(randint(1, 60))
    valores.append(novo_jogo)

#final
for s in range(comando):
    print(f'O valor do {s + 1}° jogo é: {valores[s]}')