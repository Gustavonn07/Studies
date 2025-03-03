from random import randint

valores = []

def sorteia():
    for c in range(5):
        valor = randint(1, 100)
        valores.append(valor)
def somapares():
    pares = 0
    sorteia()
    for c in range(len(valores)):
        if valores[c] % 2 == 0:
            pares += valores[c]
        else:
            pass
    return pares

soma_pares = somapares()
print(f'Os valores sorteados foram {valores}. \nA soma dos valores pares foi {soma_pares}')