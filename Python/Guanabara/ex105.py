def notas(*dados, aprov= False):
    media = maior = cont =0
    menor = 10
    boletim = {
        'nota': []
    }
    boletim['nota'].append(dados)

    # Calcular Media, Maior e Menor
    for valores in boletim['nota']:
        for nota in valores:
            media += nota

            if nota > maior:
                maior = nota

            if nota < menor:
                menor = nota
            cont += 1
    media = media/cont
    if aprov == True:
        if media >= 7:
            print(f'A maior nota foi: {maior}, A menor nota foi {menor} e a média foi {media} \n\033[32mAPROVADO\033[m')
        else:
            print(f'A maior nota foi: {maior}, A menor nota foi {menor} e a média foi {media} \n\033[31mRECUPERAÇÃO\033[m')
    else:
        print(f'A maior nota foi: {maior}, A menor nota foi {menor} e a média foi {media}')

resp = notas(5.5, 2.5, 10, 10, aprov= True)