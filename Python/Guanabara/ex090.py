dic = {
    'nome': '',
    'media': 0
}
dic['nome'] = str(input('Olá qual o nome do aluno? ')).strip().title()
dic['media'] = float(input('Qual a média? '))
if dic['media'] < 7:
    print(f'O aluno {dic["nome"]} foi reprovado')
else:
    print(f'O aluno {dic["nome"]} foi aprovado')