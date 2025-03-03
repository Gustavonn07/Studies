listagem = ('Lápis', 1.75,
            'Borracha', 1.00,
            'Caderno', 7.85,
            'Estojo', 12.50,
            'Transferidor', 8.00,
            'Compasso', 5.00,
            'Mochila', 23.60,
            'Caneta', 2.10,
            'Livro', 20.00)
print('-'*40)
print(f'{"LISTAGEM DE PREÇOS":^40}')
print('-'*40)
#Contabiliza em numero por causa do range
for c in range(0, (len(listagem))):
    if c % 2 == 0:
        print(f'{listagem[c]:.<30}', end='')
    else:
        print(f'R${listagem[c]:>6.2f}')
print('-'*40)
