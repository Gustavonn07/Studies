sexo = str(input('Digite seu gênero: '))
while sexo not in 'MmFf':
    sexo = str(input('Gênero inválido, digite seu gênero: ')).strip().upper()
if sexo in 'Mm':
    print('Seu gênero é Masculino')
if sexo in 'Ff':
    print('Seu gênero é Feminino')