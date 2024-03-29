//importa o modulo do express
const express = require ('express')
//criando um router
const router = express.Router()

// crio as rotas e as logicas
router.get('/subrota', (req, res) => {
  res.send("subrota GET")
})

router.post('/subrota', (req, res) => {
    res.send("subrota POST")
})

router.put('/subrota', (req, res) => {
    res.send("subrota PUT")
})

router.delete('/subrota', (req, res) => {
    res.send("Subrota DELETE")
})

//exporto o router
module.exports = router 
//este router tambem é um neddleware