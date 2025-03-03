def idade(nasc):
    from datetime import datetime
    ano = datetime.today().year - nasc
    return ano
def voto():
    nascimento = idade(nasc)
    if nascimento < 16:
        print('Você não pode votar!')
    elif nascimento >= 16 and nascimento < 18 or nascimento > 70:
        print('Seu voto não é obrigatório')
    else:
        print('Você deve votar!')

nasc = int(input('Quando você nasceu? '))
voto()