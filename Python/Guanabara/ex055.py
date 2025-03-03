pesos = []
for c in range (1,6):
    peso = float(input(f'Peso da {c} pessoa? '))
    pesos += [peso]
print(f'O peso máximo foi de {max(pesos)}Kg \nO peso mínimo foi de {min(pesos)}Kg')

