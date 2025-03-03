#Colocando os valores na lista valores
valores = []
for a in range(0, 5):
    valor = int(input('Diga um número: '))
    valores.append(valor)
else:
    print(f'Você digitou os valores {valores}')

#Menor valor e suas posições
menor_valor = min(valores)
posicoes_min = []
for mini in range(len(valores)):
    if valores[mini] == menor_valor:
        posicoes_min.append(mini)
print(f'O menor valor é {menor_valor} e se encontra na posição {posicoes_min}')

#Maior valor e suas posições
maior_valor = max(valores)
posicoes_max = []
for maxi in range(len(valores)):
    if valores[maxi] == maior_valor:
        posicoes_max.append(maxi)
print(f'O menor valor é {maior_valor} e se encontra na posição {posicoes_max}')