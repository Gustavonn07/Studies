def fatorial(x, show = False):
    '''
    O comando faz o fatorial do valor pedido e pode mostrar ou não os calculos
    :param show: mostrar ou não a conta
    :param x: o valor a ser multiplicado
    :return: fatorial
    '''
    fatores = 1
    for c in range(x, 0, -1):
        fatores *= c
        if show == True:
            print(f'{c}', end=' ')
            if c > 1:
                print('x', end=' ')
            else:
                print('=', end=' ')
    return fatores

print(fatorial(7, show= False))
#help(fatorial)