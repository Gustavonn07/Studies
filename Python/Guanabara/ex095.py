#Inicialização:
lista = []

#Coleta de dados:
while True:
    dados = {
        'nome': '',
        'gols': 0
    }
    dados['nome'] = str(input('Olá qual o nome do jogador? ')).strip().title()
    dados['partidas']= int(input(f'Quantas partidas {dados["nome"]} jogou? '))
    for c in range(dados['partidas']):
        dados[f'partidas-gols{c}'] = int(input(f'Quantos gols o jogador {dados["nome"]} fez na partida {c + 1}? '))
        dados['gols'] += dados[f'partidas-gols{c}']
    print('-=' * 30)
    lista.append(dados.copy())

    #Comando:
    while True:
        comando = int(input('Você gostaria de continuar? (1)Sim (2)Não: '))
        print('-=' * 30)
        if comando == 1 or comando == 2:
            break
        else:
            print('Comando inválido.')
    if comando == 2:
        break

#Apresentação:
print('-='*30)
for c in range(len(lista)):
    print(f'{c + 1}: O jogaodr {lista[c]["nome"]} fez {lista[c]["gols"]} gols durante {lista[c]["partidas"]} jogos em sua carreira')
print('-='*30)

#Vizualização Objetiva
comando2 = int(input('Você quer ver o \033[33mIndividual\033[m de algum jogador?\nSe sim diga o \033[31mNumero\033[m do jogador, caso não digite (999): '))
while comando2 != 999:
    print('-=' * 30)
    if 0 <= comando2-1 < len(lista):
        print(f'{comando2:<4} Nome:{lista[comando2 - 1]["nome"]} Partidas: {lista[comando2 - 1]["partidas"]} Gols: {lista[comando2 - 1]["gols"]}')
    else:
        print('Jogador não encontrado.')
    print('-=' * 30)
    comando2 = int(input('Você quer ver o \033[33mIndividual\033[m de algum jogador?\nSe sim diga o \033[31mNumero\033[m do jogador, caso não digite (999): '))