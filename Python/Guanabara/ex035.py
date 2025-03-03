a = float(input('Qual o 1 segmento? '))
b = float(input('Qual o 2 segmento? '))
c = float(input('Qual o 3 segmento? '))
if float(a + b > c) and float(b + c > a) and float(a + c > b):
    print('Você pode formar um triangulo!')
else:
    print('Você não pode formar um triangulo!')

