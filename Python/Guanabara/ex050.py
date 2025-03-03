soma = 0
var = []
for c in range(1,7):
    n = int(input('Diga um valor: '))
    if n % 2 == 0:
        var.append(n)
for v in var:
    soma += v
print(soma)