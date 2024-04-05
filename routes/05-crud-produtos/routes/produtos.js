const express = require('express')
const router = express.Router()

//lista mockada
let listaProdutos =[
    {
        id: 1,
        nome: "Coca-cola",
        preco: 4.99
    },
    {
        id: 2,
        nome: "Feijão",
        preco: 12.00
    },
    {
        id: 3,
        nome: "Leite",
        preco: 5.99
    }
]


//READ -> Buscar todos os produtos
router.get('/produtos', (req, res) => {
    res.json(listaProdutos)

})

//Buscar -> Buscar produto pelo id

router.get('/produtos/:id', (req, res) => {
    const id = req.params.id
    const index = listaProdutos.findIndex(produto => produto.id == id) 
    const produto = listaProdutos[index]

    res.json(produto)


})

//CREATE  - Criar um produto
router.post('/produtos', (req, res) => {
    const novoProduto = req.body
    console.log(novoProduto)

    listaProdutos.length


    const produto = {
        id: listaProdutos.length + 1,
        nome: novoProduto.nome,
        preco: novoProduto.preco
    }
    console.log(produto)

    listaProdutos.push(produto)


    res.json({ mensagem: "Produto cadastrado com sucesso!"})
})


// DELETE -> Deletar um produto
router.delete('/produtos/:id', (req, res) => {
    const id = req.params.id
    const index = listaProdutos.findIndex(produto => produto.id == id)
    listaProdutos.splice(index, 1)
    res.json({ mensagem: "Produto excluido com sucesso!"})
})


//UPDATE -> alterar um produto
router.put('/produtos/:id', (req, res) => {
    const id = req.params.id
    const novosDados = req.body

    const index = listaProdutos.findIndex(produto => produto.id == id)
    
    const produtoAlterado = {
        id: id,
        nome: novosDados.nome,
        preco: novosDados.preco
    }
    //reatribuir
    listaProdutos[index] = produtoAlterado

    res.json({ mensagem: "Produto alterado com sucesso!"})
})

module.exports = router