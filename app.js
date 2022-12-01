/**********
 * Objetivo: Arquivo responsável pela manipulaçao de recebimento, tratamento e retorno de dados entre API e BD
 * Data: 21/11/22
 * Autor: Melissa Victória, Ana Beatriz e Yasmin Nascimento
 * Versão: 1.0
 */

//import das bibliotecas (API)
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {MESSAGE_ERROR, MESSAGE_SUCCESS} = require('./config/config.js')

const app = express()
   
//config de cors para liberar o acesso a API
app.use((request, response, next) => {
    response.header('Access-Coltrol-Allow-Origin', '*')
    response.header('Access-Coltrol-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
    app.use(cors())
    next()
})

//Permite receber um json nas requisicoes
const jsonParser = bodyParser.json()

//Endpoint que lista os produtos
app.post('/v1/produto', cors(), jsonParser, async function(request,response){

    let statusCode
    let message = {}
    
    const controllerProduto = require('./controller/controllerProduto.js')
    const dadosProdutos = await controllerProduto.listarProdutos()

    console.log(dadosProdutos);
    if(dadosProdutos){
    statusCode = 202
    message = dadosProdutos
    } else {
        statusCode = 404
        message = MESSAGE_ERROR.NOT_FOUND_DB
    }
    response.status(statusCode)
    response.json(message)
})

//Endpoint para inserir um novo produto









//ativa o servidor para receber requisicoes http
app.listen(8080, function(){
    console.log('Servidor aguardando requisicoes')
   })