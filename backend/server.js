const express = require('express')
const routes = require('./routes')
const app = express()

//usando o express caso precise usar o json
app.use(express.json())
//usando o express passando as rotas criadas por parametro
app.use(routes)

//inicia o localhost na porta 2021
app.listen(2021)