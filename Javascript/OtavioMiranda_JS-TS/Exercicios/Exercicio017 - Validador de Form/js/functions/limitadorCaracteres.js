function limitadorCaracteres(minCaracteres, maxCaracteres, texto) {  

    if(texto.length < minCaracteres || texto.length > maxCaracteres) {
        return false
    } 
    return true;
}