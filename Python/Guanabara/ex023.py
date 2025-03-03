num = int(input('Ola amigo me diga um número entre 0000 e 9999: '))
u = num // 1 % 10
d = num // 10 % 10
c = num // 100 % 10
m = num // 1000 % 10
print(f'O valor da casa de unidades é: {u}')
print(f'O valor da casa de dezenas é: {d}')
print(f'O valor da casa de centenas é: {c}')
print(f'O valor da casa de milhar é: {m}')