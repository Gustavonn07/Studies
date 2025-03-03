from datetime import datetime
nasc = int(input('Olá quando você nasceu? '))
atual = datetime.today().year
if (atual - nasc) < 10:
    print('Você é um atleta MIRIM')
elif (atual - nasc) > 9 and (atual - nasc) < 15:
    print('Você é um atleta INFANTIL')
elif (atual - nasc) > 14 and (atual - nasc) < 19:
    print('Você é um atleta JUNIOR')
elif (atual - nasc) > 18 and (atual - nasc) < 26:
    print('Você é um atleta SÊNIOR')
elif (atual - nasc) > 25:
    print('Você é um atleta MASTER')