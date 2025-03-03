km = float(input('Olá quantos Quilometros é sua viagem? '))
if float(km) <= 200:
    print(f'O valor da sua passagem será de {(km) * 0.5:.2f} R$')
else:
    print(f'O valor da sua passagem séra de {(km) * 0.45:.2f} R$')