from time import sleep
escolha = 0
num1 = int(input('Olá Insira um número: '))
sleep(0.5)
num2 = int(input('Insira outro número: '))
sleep(0.5)
while escolha != 5:
    escolha = int(input('\033[36mSomar os 2 valores [1] \nMultiplicar os 2 valores [2] \nVer o maior valor [3] \nNovos números [4] \nParar o programa [5]\033[m \nQual você quer? '))
    if escolha == 1:
        sleep(0.5)
        soma = num1 + num2
        print(f'A soma dos dois valores é de: {soma}.')
        sleep(0.5)
        comando_soma = int(input('\033[36mVocê gostaria de somar outro valor? sim[1] não[2]\033[m \nDigite o valor: '))
        while comando_soma == 1:
            sleep(0.5)
            numsoma = int(input('Qual o número? '))
            soma += numsoma
            sleep(0.5)
            print(f'A soma dos valores é de: {soma}.')
            sleep(0.5)
            comando_soma = int(input('\033[36mVocê gostaria de somar outro valor? sim[1] não[2]\033[m \nDigite o valor: '))
            sleep(0.5)
    if escolha == 2:
        sleep(0.5)
        multiplicação = num1 * num2
        print(f'A multiplicação dos dois valores é de: {multiplicação}.')
        sleep(0.5)
        comando_mult = int(input('\033[36mVocê gostaria de multiplicar outro valor? sim[1] não[2]\033[m \nDigite o valor: '))
        while comando_mult == 1:
            sleep(0.5)
            nummult = int(input('Qual o número? '))
            multiplicação *= nummult
            sleep(0.5)
            print(f'A multiplicação dos valores é de: {multiplicação}.')
            sleep(0.5)
            comando_mult = int(input('\033[36mVocê gostaria de multiplicar outro valor? sim[1] não[2]\033[m \nDigite o valor: '))
            sleep(0.5)
    if escolha == 3:
        sleep(0.5)
        if num1 > num2:
            print(f'O valor {num1} é maior que o valor {num2}')
        elif num1 == num2:
            print('Os dois valores são iguais.')
        else:
            print(f'O valor {num2} é maior que o valor {num1}')
        sleep(0.5)
    if escolha == 4:
        num1 = int(input('Insira um número: '))
        sleep(0.5)
        num2 = int(input('Insira outro número: '))
    if escolha > 5 or escolha < 1:
        sleep(0.5)
        print('Opção Inválida, tente novamente.')
        sleep(0.5)
print('Saindo do programa...')
sleep(1)
print('Volte sempre!')
