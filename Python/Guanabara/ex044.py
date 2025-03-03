preço = float(input('Olá seja bem vindo a nossa loja lojando, qual o preço do produto? \nInsira aqui: '))
forma = int(input(f'Certo o valor é de {preço}, qual a forma de pagamento? \nDinheiro/Cheque [1] \nCartão a Vista [2] \n2x no Cartão [3] \n3x ou mais no Cartão [4] \nInsira a opção: '))
if forma == 1:
    desconto = preço/10
    print(f'Você receberá desconto de 10%, o valor a ser pago será: {preço - desconto}.')
elif forma == 2:
    desconto = preço*5/100
    print(f'Você receberá desconto de 5%, o valor a ser pago será: {preço - desconto}.')
elif forma == 3:
    print(f'Você pagará: 2x{preço/2}.')
elif forma == 4:
    parc = int(input('Quantas vezes parcelado? '))
    juros = (preço + (preço/5))
    print(f'Você pagará com 20% de juros o valor de: {juros} dividido {juros / parc} em {parc}x.')