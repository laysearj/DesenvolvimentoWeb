const express = require("express");
const server = express();

//pega o banco de dados
const db = require("./database/db")


//configurar pasta public
server.use(express.static("public"));


//utilizando template engine
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//configurar caminhos da aplicação
//página inicial
//req -> requesição
//res -> resposta
server.get("/", (req, res) => {
    return res.render("index.html", {
        title: ""
    });
})

server.get("/create-point", (req, res) => {
    return res.render("creat-point.html");
})

server.get("/search", (req, res) => {
    //pegar dados do banco
    db.all(`SELECT * FROM places`, function(err, rows) {
        if(err) {
            return console.log(err);
        }

        console.log("aqui estão seus registros: ");
        console.log(rows);

        //mostrar o html com o banco
        return res.render("search-results.html", { places: rows});
    })    
})


//ligar o server
server.listen(3000);