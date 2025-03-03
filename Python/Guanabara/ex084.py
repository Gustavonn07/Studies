nomemax = []
nomemin = []
pessoas = comando = pesomax = 0
lista = []

#Loop e Dados
while comando != 1:
    nome = str(input('Ola diga o seu nome: ')).strip().title()
    peso = float(input('Agora o seu peso: '))
    nomepeso = [nome, peso]
    pessoas += 1
    #Criar uma cópia da lista para não possuir ligação no código
    lista.append(nomepeso[:])

    #Peso maior
    if peso > pesomax:
        pesomax = peso
        nomemax = [nome]
    elif peso == pesomax:
        nomemax.append(nome)

    #Peso menor
    if pessoas == 1:
        pesomin = peso
        nomemin = [nome]
    elif peso < pesomin:
        nomemin = [nome]
        pesomin = peso
    elif peso == pesomin:
        nomemin.append(nome)

    #Comando
    comando = int(input('Continuar? [1] Não: '))

#Final
print(f'No total foram {pessoas} pessoas que participaram.')
print(f'A lista com nome das pessoas é:', end=' ')
for c in range(len(lista) - 1):
    print(f'{lista[c][0]} ', end='')
print(f'{lista[c][0]}.')
print(f'O maior peso foi {pesomax}Kg de {nomemax}.')
print(f'O menor peso foi {pesomin}Kg de {nomemin}.')


