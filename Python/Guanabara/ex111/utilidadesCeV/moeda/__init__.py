def moeda(valor = 0, moeda = 'R$'):
    return f'{valor:.2f} {moeda}'.replace('.', ',')

def aumentar(valor = 0, taxa = 0, format = False):
    res = valor + (valor * taxa / 100)
    if format == True:
        res = moeda(res)
    return res

def diminuir(valor = 0, taxa = 0, format = False):
    res = valor - (valor * taxa / 100)
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

def resumo(valor = 0, taxa = 0, format = False):
    print('-=' * 25)
    print(f' O valor {valor} aumentado em {taxa}% é de: {aumentar(valor, taxa, True)}')
    print(f' O valor {valor} diminuido em {taxa}% é de: {diminuir(valor, taxa, True)}')
    print(f' O valor {valor} dobrado é de: {dobro(valor, True)}')
    print(f' O valor {valor} pela metade é de: {metade(valor, True)}')
    print('-=' * 25)