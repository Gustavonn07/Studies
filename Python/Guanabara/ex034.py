sal = float(input('Olá qual o seu salario? '))
if sal > 1250:
    print(f'O seu salário será: {float(sal)*10/100+float(sal):.2f} R$')
else:
    print(f'O seu salário será: {float(sal)*15/100+float(sal):.2f} R$')