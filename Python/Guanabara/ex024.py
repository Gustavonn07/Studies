cid = str(input('Qual o nome da cidade que vc nasceu? '))
cid = cid.split()
cids = ('Santos' in cid[0].capitalize())
print(f'O nome da sua cidade começa com santos? {cids}')
