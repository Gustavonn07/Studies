lag = float(input('Ola amigo qual seria a largura da sua parede? '))
alt = float(input('Certo e a altura seria qual? '))
print(f'Entendido amigo, pois a área da sua parede é {lag*alt:.2f}m²', end=('. '))
print(f'A quantidade de tinta necessária (1L pinta 2m²) seria de {(lag*alt)/2:.2f}L')