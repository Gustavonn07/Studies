def aumentar(valor = 0, aumento = 0):
    res = valor + (valor * aumento/100)
    return res

def diminuir(valor = 0, diminuir = 0):
    res = valor - (valor * diminuir / 100)
    return res

def dobro(valor = 0):
    res = valor * 2
    return res

def metade(valor = 0):
    res = valor / 2
    return res

def moeda(valor = 0, moeda = 'R$'):
    return f'{valor:.2f} {moeda}'.replace('.', ',')