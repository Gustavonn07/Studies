import ex115.programa.menu as menu
import ex115.programa.arquivo as arquivo

arq = 'cursoemvideo.txt'

if arquivo.arqExiste(arq):
    print(f'\033[32mArquivo {arq} encontrado com sucesso!\033[m')
else:
    print(f'\033[31mArquivo {arq} não encontrado!\033[m')
    arquivo.arqCriar(arq)

comando = menu.menu()
menu.pagina(comando)

