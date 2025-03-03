from ex112.utilidadesCeV import moeda
from ex112.utilidadesCeV import dado

valor = dado.leiavalor('Qual o valor em real? ')
moeda.resumo(valor, 15, True)