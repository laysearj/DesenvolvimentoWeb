class Negociacao {

    constructor(data, quantidade, valor) {

        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;

        //congelando o construtor p/ não mudar o valor
        Object.freeze(this); 
        //esse freeze é raso ele ñ congela os objetos como o Date
    }


    //acesso de leitura acesso pelo proprio nome 
    //ex: get volume() = volume;

    get volume() {

        return this._quantidade * this._valor;
    }

    get data() {
        //forma de "congelar" o Date
        //programção defensiva
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}
