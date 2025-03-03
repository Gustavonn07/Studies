def area(a, b):
    area = a * b
    print(f'A area do terreno é de {area}m²')

def linha():
    print('-'*40)

linha()
a = int(input('Olá qual a largura do terreno? '))
linha()
b = int(input('E o comprimento? '))
linha()
area(a, b)