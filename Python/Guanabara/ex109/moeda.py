def moeda(valor = 0, moeda = 'R$'):
    return f'{valor:.2f} {moeda}'.replace('.', ',')

def aumentar(valor = 0, aumento = 0, format = False):
    res = valor + (valor * aumento/100)
    if format == True:
        res = moeda(res)
    return res

def diminuir(valor = 0, diminuir = 0, format = False):
    res = valor - (valor * diminuir / 100)
    if format == True:
        res = moeda(res)
    return res

def dobro(valor = 0, format = False):
    res = valor * 2
    if format == True:
        res = moeda(res)
    return res

def metade(valor = 0, format = False):
    res = valor / 2
    if format == True:
        res = moeda(res)
    return res

