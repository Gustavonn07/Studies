n1 =str (input('nome: '))
n2 = str(input('nome: '))
n3 = str(input('nome: '))
n4 = str(input('nome: '))
nomes = [n1, n2, n3, n4]
import random
random.shuffle(nomes)
print(f'A ordem de apresentação será: {nomes}')

#print(f'A ordem de apresentação será: {random.sample(nomes,k=4)}') esse pode ser utilizado mudando o k para retirar algo