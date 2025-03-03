numbers = ('um','dois','três','quatro','cinco','seis','sete','oito','nove','dez','onze','doze'
           ,'treze','catorze','quinze','dezesseis','dezesete','dezoito','dezenove','vinte')
valor = int(input('Diga um valor entre 1 e 20: '))
while valor > 20 or valor < 1:
    if valor > 20 or valor < 1:
        valor = int(input('Número não existente. Diga um valor entre 1 e 20: '))
print(f'O valor que você deu por extenso é {(numbers[valor-len(numbers)-1])}')
