vez = 0
valor = int(input('Olá qual o valor? '))
razão = int(input('Qual a razão? '))
pa = valor + razão
print(f'\033[36mO valor {valor} em PA com a razão {razão} é:\033[m\n{valor} -> {pa}', end=' -> ')
while vez <= 7:
    vez += 1
    pa += razão
    print(f'{pa}', end='')
    print(' -> ' if vez <= 7 else '',end='')