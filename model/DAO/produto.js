/**********
 * Objetivo: Arquivo responsável pela manipulaçao de recebimento, tratamento e retorno de dados entre API e BD
 * Data: 21/11/22
 * Autor: Melissa Victória, Ana Beatriz e Yasmin Nascimento
 * Versão: 1.0
 */


 // Função que lista todos os produtos da pizzaria
const selectAllProdutos = async function(){

    const {PrismaClient} = require('@prisma/client')
    const prisma = newPrismaClient()

    let sql = `select cast(id as float) as id, nome, preco from tbl_produto order by id desc`

    const products = await prisma.$queryRawUnsafe(sql)

    if (products.lenght > 0){
        return products
    } else {
        return false
    }
}

// Função que lista todas as pizzas

const selectAllPizzas = async function(){

    const {PrismaClient} = require('@prisma/client')
    const prisma = newPrismaClient()

    const sql = `select tbl_produto.nome, tbl_produto.preco, tbl_pizza.status_favorita, tbl_produto.id from tbl_produto inner join on tbl_produto.id = tbl_pizza.id_produto`
    const products = await prisma.$queryRawUnsafe(sql)

    if (products.lenght > 0){
        return products
    } else {
        return false
    }

}

    //Função que lista todas as bebidas 

    const selectsAllBebidas = async function(){
       
        const {PrismaClient} = require('@prisma/client')
        const prisma = newPrismaClient()

        const sql = `tbl_produto.nome, tbl_produto.preco, tbl_produto.id from tbl_produto inner join tbl_bebida on tbl_produto.id = tbl_bebida.id_produto`
        const products = await prisma.$queryRawUnsafe(sql)

    if (products.lenght > 0){
        return products
    } else {
        return false
    }

}

 // Função que lista a pizza pelo id 

 const selectPizzaById = async function(id){

    const {PrismaClient} = require('@prisma/client')
    const prisma = newPrismaClient()
 
    const sql = `where tbl_pizza.id = ${id}`

      const rsPizza = await prisma.$queryRawUnsafe(sql)

    if (rsPizza.lenght > 0){
        return products
    } else {
        return false
    }

 }

 module.exports = {
     
    selectAllProdutos, 
    selectAllPizzas,
    selectPizzaById,
    selectsAllBebidas

 }