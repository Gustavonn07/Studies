peso = float(input('Olá qual o seu peso? '))
altura = float(input('E qual a sua altura? '))
imc = peso/altura**2
if imc < 18.5:
    print('Você está Abaixo do Peso')
elif imc == 18.5 and imc < 25.1:
    print('Você está no Peso Ideal')
elif imc > 25 and imc < 30.1:
    print('Você está Sobrepeso')
elif imc > 30 and imc < 40.1:
    print('Você está Obeso')
elif imc > 40:
    print('Você está em Obesidade Morbida')
print(f'Seu imc é {imc:.1f}')