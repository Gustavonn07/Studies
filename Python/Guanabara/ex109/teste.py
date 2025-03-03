import moeda

valor = float(input('Qual o valor em real? '))
taxa = int(input('Qual a taxa? '))
print(f'Se a taxa for positiva aumenta para {moeda.aumentar(valor, taxa, format=True)}')
print(f'Se a taxa for negativa diminui para {moeda.diminuir(valor, taxa, format=True)}')
print(f'O dobro é {moeda.dobro(valor, format=True)}')
print(f'A metade é {moeda.metade(valor, format=False)}')