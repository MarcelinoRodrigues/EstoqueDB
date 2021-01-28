const express = require('express')
const path = require('path')
const routes = express.Router()

//pegando o diretorio da pasta public e tudo que tem nela
routes.use(express.static(path.join(__dirname,"../frontend/public/")))

//pegando o index e definindo como rota principal(/)
routes.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname + "/../frontend/index.html"))
})
//teste para ver se tem resposta do servidor
routes.get("/send",(req,res)=>{
    res.send("baseland")
})

//exportando o routes para usar em outros cantos
module.exports =routes