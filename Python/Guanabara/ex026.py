frase = str(input('Digite uma frase: ')).strip().lower()
print(f'Sua frase possui {frase.count("a")} letras A')
print(f'Na sua frase aparece a letra A no {frase.find("a")+1} caractere')
print(f'Na sua frase o ultimo A aparece no {frase.rfind("a") } caractere')
