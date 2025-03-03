from time import sleep
times = ("Flamengo","Santos","Palmeiras","Gremio",
             "Atletico Paranaense", "São Paulo","Internacional",
             "Conrithians","Fortaleza","Goias","Bahia","Vasco",
             "Atletico Mineiro","Fluminense","Botafogo","Ceará",
             "Cruzeiro","CSA","Chapecoense","Avaí")
comando = 9
while comando != 0:
    comando = int(input('Caso você queira ver a lisa em ordem alfabética digite [1] \nCaso você queira ver os 5 primeiros times digite [2] \nCaso você queira ver a posição do Chapecoense digite [3] \nCaso você queira ver os ultimos 5 colocados digite [4] \nCaso você queira parar o programa digite [0]: '))
    sleep(1)
    if comando == 1:
        print('='*251)
        print(sorted(times))
        print('='*251)
    if comando == 2:
        print('=' * 70)
        print(times[0:5])
        print('=' * 70)
    if comando == 3:
        print('=' * 34)
        print(f'O Chapecoense está na posição {times.index("Chapecoense")+1}')
        print('=' * 34)
    if comando == 4:
        print('=' * 51)
        print(times[-5:])
        print('=' * 51)
    sleep(1.5)
