a = float(input('Qual o 1° segmento? '))
b = float(input('Qual o 2° segmento? '))
c = float(input('Qual o 3° segmento? '))
if float(a + b > c) and float(b + c > a) and float(a + c > b):
    if (a == b) or (b == c) or (a == c):
        if (a == b) and (b == c) and (a == c):
            print('Você possui um Triângulo Equilátero!')
        else:
            print('Você possui um Triângulo Isóceles!')
    else:
        print('Você possui um Triângulo Escaleno!')
else:
    print('Isso não pode formar um Triângulo')