val = int(input('Qual o valor da casa? '))
s = int(input('Qual o seu salário? '))
a = int(input('Em quantos anos você pretende pagar? '))
if val/(a*12) <= 30*s/100:
    print('Sua compra foi aceita.')
elif val/(a*12) >= 30*s/100:
    print('Sua compra foi recusada.')
