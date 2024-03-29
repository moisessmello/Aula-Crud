// IMPORTS
const express = require('express')
const tutorial = require('./routes/tutorial')
const subrota = require('./routes/subrota')
const contatos = require('./routes/contatos')

//CONFIGURAÇÃO
const app = express()

//NIDDLEWARES
//niddlewares que transforma o corpo da requisição em objeto json
//dentro da nossa aplicação
app.use(express.json())

//ROTAS
//trazendo as rotas do modo tutorial para dentro da minha aplicação
app.use(tutorial)
// trazendo as rotas do modulo subrota
app.use('/rota', subrota)
//trazendo a rota do modo contato
app.use(contatos)


// contrato -> configuração das rotas e da lógica
app.get("/", (req, res) => {
    res.send("Aplicação rodando!!")
})

//start da nossa aplicação na porta 3000

app.listen(3000,() => {
    console.log("Api rodando em http://localhost:3000")
})