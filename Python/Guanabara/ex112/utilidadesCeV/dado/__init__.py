def leiavalor(msg):
    valido = False
    while not valido:
        entrada = str(input(msg)).replace(',', '.')
        if entrada.isalpha() or entrada.strip() == '':
            print('\033[31mErro, valor inválido\033[m')
        else:
            valido = True
            return float(entrada)