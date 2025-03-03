import math, emoji
ca = int(input(emoji.emojize('Qual o valor do cateto adjacente :angry_face:? ')))
co = int(input(emoji.emojize('Qual o valor do cateto oposto :skull:? ')))
print(f'O valor da hipotenusa é {math.hypot(ca,co)}')

#O math.pow(x,y) eleva o x por y

# 1 tentativa: (não sabia do math.hypot(x,y))
# import math, emoji
# ca = int(input(emoji.emojize('Qual o valor do cateto adjacente :angry_face:? ')))
# co = int(input(emoji.emojize('Qual o valor do cateto oposto :skull:? ')))
# print(f'O valor da hipotenusa é {math.trunc(math.sqrt(math.pow(ca,2)+math.pow(co,2)))}')
