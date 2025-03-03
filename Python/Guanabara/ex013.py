n = str(input('Ola meu funcionário, vamos ajustar seu salario? primeiramente qual o seu nome? '))
sal = float(input(f'Bem {n} vamos lá, seu aumento será de 15% \nme diga o valor do seu salario atual: '))
print(f'Certo {n}, o seu salário de {sal} será {sal+(sal*15/100):.2f} certo?')