val = float(input('Olá meu amigo me diga um valor e vou da um desconto de 5% para você: '))
print(f'Bem de acordo com meus calculos o seu valor de {val} receberá o desconto de 5% e será de {(val*5)/100:.2f}',end=(' '))
print(f'e o valor que você terá de pagar seria de {val-((val*5)/100):.2f}')
