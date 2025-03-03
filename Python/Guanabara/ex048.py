print('O valor da soma de todos os números ímpares multiplos de 3 entre 1 e 500 são: ')
s = 0
for c in range(1,501):
    if c % 2 == 1 and c % 3 == 0:
        s = (s+c)
print(f'O valor é {s}')

