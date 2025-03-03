ficha = []
cont = 0

#Fichas dos alunos
while True:
    nome = str(input('Ola diga o seu nome: ')).strip().title()
    nota1 = float(input('Qual a sua 1° nota? '))
    nota2 = float(input('Qual a sua 2° nota? '))
    media = (nota1 + nota2)/2
    ficha.append([nome, [nota1, nota2], media])
    cont += 1
    comando = int(input('Você quer continuar? Sim [1] / Não [2]: '))
    if comando == 2:
        break

#Boletim
print('-='*10)
print(f'{"No":<4}{"NOME":<10}{"MEDIA":<8}')
print('-='*10)
for c in range(cont):
    print(f'{c:<4}{ficha[c][0]:<10} {ficha[c][2]:<8}')
print('-='*10)

#Individual
comando2 = int(input('Você quer ver o \033[33mIndividual\033[m de algum aluno?\nSe sim diga o \033[31mNo\033[m do aluno, caso não digite (999): '))
while comando2 != 999:
    print('-=' * 17)
    print(f'{"No":<4}{"NOME":<10}{"NOTAS":<12}{"MEDIA":<8}')
    print('-=' * 17)
    notas = " ".join(str(n) for n in ficha[comando2][1])
    print(f'{comando2:<4}{ficha[comando2][0]:<10}{notas:<12}{ficha[comando2][2]:<8}')
    print('-=' * 17)
    comando2 = int(input('Você quer ver o \033[33mIndividual\033[m de algum aluno?\nSe sim diga o \033[31mNo\033[m do aluno, caso não digite (999): '))
