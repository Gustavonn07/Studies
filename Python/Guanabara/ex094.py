
dados = {}
lista = []
soma = mulheres = 0
acima = []
abaixo = []

#Coleta de dados:
while True:
    dados['nome'] = str(input('Olá qual o seu nome? ')).strip().title()
    dados['idade'] = int(input('Qual a sua idade? '))
    soma += dados['idade']
    dados['genero'] = str(input('Qual o seu gênero (M/F)? ')).strip().upper()
    if dados['genero'] == 'F':
        mulheres += 1

    #Genero inválido
    if dados['genero'] in ['M', 'F']:
        pass
    else:
        while dados['genero'] not in ['M', 'F']:
            dados['genero'] = str(input('Genero inválido, qual o seu gênero (M/F)? ')).strip().upper()
            if dados['genero'] == 'F':
                mulheres += 1

    print('-='*30)
    lista.append(dados.copy())
    comando = int(input('Quer continuar? \n(1) Sim / (2) Não: '))
    print('-=' * 30)
    if comando in [1, 2]:
        if comando == 1:
            pass
        else:
            break

    #Comando inválido
    else:
        while comando not in [1, 2]:
            comando = int(input('Comando inválido quer continuar? \n(1) Sim / (2) Não: '))
            print('-=' * 30)
        else:
            if comando == 1:
                pass
            else:
                break

    #Coleta acima ou abaixo media:
for c in range(len(lista)):
    if lista[c]['idade'] > (soma/len(lista)):
        acima.append(lista[c]['nome'])
    if lista[c]['idade'] < (soma/len(lista)):
        abaixo.append(lista[c]['nome'])

#Input
print(f'Os cadastros foram: {lista}')
print('-=' * 30)
print(f'O total de pessoas cadastradas foram: {len(lista)}')
print(f'A média de idade entre as pessoas cadastradas foram: {soma/len(lista)}')
print(f'O total de mulheres cadastradas foi de: {mulheres}')
print(f'As pessoas com idade acima da média foram: {acima} \nAs pessoas com idade abaixo da média foram {abaixo}')
