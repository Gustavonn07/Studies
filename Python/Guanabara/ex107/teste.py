import moeda

valor = int(input('Qual o valor em real? '))
taxa = int(input('Qual a taxa? '))
print(f'Se a taxa for positiva aumenta para {moeda.aumentar(valor, taxa)}')
print(f'Se a taxa for negativa diminui para {moeda.diminuir(valor, taxa)}')
print(f'O dobro é {moeda.dobro(valor)}')
print(f'A metade é {moeda.metade(valor)}')