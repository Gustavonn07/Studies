from datetime import date
dados = {
    'nome': '',
    'nasc': 0,
    'ctps': 0
}

#Coleta de dados
dados['nome'] = str(input('Olá qual o seu nome? ')).strip().title()
dados['nasc'] = int(input('Quando você nasceu? '))
dados['ctps'] = int(input('Qual o seu CTPS? (0 se não tiver): '))
if dados['ctps'] != 0:
    dados['salario'] = int(input('Quanto você ganha? '))
    dados['comec'] = int(input('Quando você começou a trabalhar? '))

idade = date.today().year - dados['nasc']
idapos = 60 - idade

print(f'Seu nome é {dados["nome"]}')
print(f'Sua idade é {idade}')
print(f'O id do seu CTPS é {dados["ctps"]}')
print(f'Seu salário é {dados["salario"]} R$')
print(f'Faltam {idapos} anos para você se aposentar')





