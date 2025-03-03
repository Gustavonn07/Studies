print('='*20)
print('10 TERMOS DE UMA PA')
print('='*20)
num = int(input('O primeiro valor: '))
razao = int(input('A razão: '))
decimo = num + (10 - 1)*razao
for pa in range (num,decimo + 1,razao):
    print(pa, end=' ')