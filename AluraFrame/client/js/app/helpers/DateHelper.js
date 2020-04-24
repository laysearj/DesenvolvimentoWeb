class DateHelper {

    constructor() {
        throw new Error('DateHelper não pode ser instanciada');
    }

    static dataParaTexto(data) {

        //+1 para corrigir o mês
        return `${data.getDate()}
        /${data.getMonth()+1} 
        /${data.getFullYear()}`;
    }

    static textoParaData(texto) {
        
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) 
            throw new Error('Deve estar no formato aaaa-mm-dd');
        //transformaremos a string em um array, utilizando o split('-')
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
        //função oculta que já faz o retorno automático
        //essa conta equivale ao if
    }
}

//Equivale ao if (explicação)
/*Se estamos na primeira posição do array, o valor de indice é 0. Por isso, 
o resultado de indice % 2 será igual a 0 também. Se subtrairmos este valor 
de item, nada irá mudar. Mas quando estivermos na segunda posição do array, 
o indice será igual a 1. Agora, quando calcularmos 1 módulo de 2, o 
resultado será 1. E quando estivermos na terceira posição do array, 2 módulo 
de 2, também será igual a 0. Não diminuiremos nada do valor do item. Dessa 
forma conseguimos evitar a criação de um if. */
