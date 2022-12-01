/**********
 * Objetivo: Arquivo responsável pela manipulaçao de recebimento, tratamento e retorno de dados entre API e BD de uma pizzaria
 * Data: 21/11/22
 * Autor: Melissa Victória, Ana Beatriz e Yasmin Nascimento
 * Versão: 1.0
 */

 const {MESSAGE_ERROR, MESSAGE_SUCCESS} = require('../config/config.js')
 const produto = require('../model/DAO/produto.js')

 // Função para listar todos os produtos
 
 const listarProdutos = async function(){

    const {selectAllProdutos} = require('../model/DAO/produto.js')
    let dadosProdutosJson = {}
    const dadosProdutos = await selectAllProdutos
     
     if (dadosProdutos)  {
            dadosProdutosJson.produtos = dadosProdutos 
            return dadosProdutosJson
    } else {
        return false
    }
    
 }

module.exports = {
    listarProdutos
}