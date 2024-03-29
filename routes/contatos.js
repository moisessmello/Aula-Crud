//importar express

const express = require('express')
//cria um router
const router = express.Router()

//dados mockados
//criar uma lista
let listaContatos = []

// CRUD
// READ  - BUSCAR TODOS OS CONTATOS
router.get('/contatos', (req, res) => {

    res.json(listaContatos)
})

//READ - busca do contato pelo identificador
router.get('/contatos/:id', (req, res) => {
    const id = req.params.id
    const contato = listaContatos[id]
    res.json(contato)
})

//CREATE - cadastrar um contato
router.post('/contatos', (req, res) => {
    const contato = req.body
    listaContatos.push(contato.nome)

    res.status(201).json( {mensagem: "contato criado com sucesso!" })
})

// delete - excluir contato

router.delete("/contatos/:id", (req, res) => {
    const id = req.params.id
    listaContatos.splice(id, 1)
    res.json({mensagem: "Contato excluido com sucesso!"})
})

// UPDATE - ATUALIZAR CONTATO
router.put('/contatos/:id', (req, res) => {
    const id = req.params.id
    const contato = req.body
    listaContatos[id] = contato.nome
    res.json({mensagem: "Contato atualizado com sucesso!"})
})





// exportar o router
module.exports = router
