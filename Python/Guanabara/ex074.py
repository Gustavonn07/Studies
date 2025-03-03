# random.choice é para um valor apenas e random.choices para o valor até o número da constante k
import random
c = tuple(random.choices(range(10), k=5))
print(c)
