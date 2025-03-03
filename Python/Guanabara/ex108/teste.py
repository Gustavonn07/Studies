import moeda

valor = float(input('Qual o valor em real? '))
taxa = int(input('Qual a taxa? '))
print(f'Se a taxa for positiva aumenta para {moeda.moeda(moeda.aumentar(valor, taxa))}')
print(f'Se a taxa for negativa diminui para {moeda.moeda(moeda.diminuir(valor, taxa))}')
print(f'O dobro é {moeda.moeda(moeda.dobro(valor))}')
print(f'A metade é {moeda.moeda(moeda.metade(valor))}')