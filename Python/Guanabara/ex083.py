cont1 = cont2 = 0
pilha = []
exp = str(input('Diga uma expressão: '))

#Vendo se tem ( ou )
for simb in exp:
    if simb == '(':
        pilha.append('(')
    elif simb == ')':
        #Se tiver algo exclui o ultimo valor
        if len(pilha) > 0:
            pilha.pop()
        else:
        #Se não tiver algo adiciona para dar erro no fim
            pilha.append(')')
            break
if len(pilha) == 0:
    print('Sua expressão esta correta!')
else:
    print('Sua expressão esta errada!')