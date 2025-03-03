print('='*21)
print('LOJA SUPER BARATÃO')
print('='*21)
soma = 0
preco1000 = 0
barato = 0
while True:
    produto = str(input('Qual o produto? ')).strip().capitalize()
    valor = int(input('Qual o valor? '))
    comando = int(input('Você quer continuar SIM [1], NÃO [2]: '))
    soma += valor
    if valor >= 1000:
        preco1000 += 1
    if valor > barato:
        preçobarato = valor
        valorbaratostr = produto
        if valor > preçobarato:
            valorbaratostr = produto
    if comando == 2:
        break
print(f'O valor total das compras é de: {soma} R$ \nTiveram {preco1000} produtos acima de 1000 R$ \nO produto mais barato foi {valorbaratostr}')