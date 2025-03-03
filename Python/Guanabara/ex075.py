tupla = ()
contador = par = 0
valor = ()
while contador <= 3:
    contador += 1
    valor = int(input('Diga um valor: '))
    tupla += valor,
    if valor % 2 == 0:
        par += 1
    if contador == 3:
        contador += 1
        valor = int(input('Diga o ultimo valor: '))
        if valor % 2 == 0:
            par += 1
        tupla += valor,
if 3 in tupla:
    print(f'O valor 3 aparece na {tupla.index(3)}° posição')
else:
    print('O valor 3 não aparece')
print(f'O valor 9 aparece {tupla.count(9)} vezes ')
print(f'Tem {par} números pares')