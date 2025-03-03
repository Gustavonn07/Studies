from random import randint

lista = []

def maior():
    quantidade = randint(1, 10)
    maximo = 0
    for c in range(quantidade):
        valor = randint(1, 100)
        lista.append(valor)

        if valor > maximo:
            maximo = valor
    return maximo

def linhas():
    print('-='*30)


linhas()
maximo_encontrado = maior()
print(f' Os valores retirados foram: {lista} \n Teve um total de {len(lista)} números e o maior valor foi de {maximo_encontrado}')
linhas()