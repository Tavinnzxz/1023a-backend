// let nomeMateria:string = "Frameworks I"
// console.log(nomeMateria)

// const variavel = 10
// const variavelNumber:number = 10
// const variavelString:string = "Frameworks I"
// const variavelBooleano:boolean = true //false

// const vetor:number[] = []

// const vetorstring:string[] = ["Strings", "11"]

// vetor.push(10)

// //Como criar objetos em JS

// const pessoa:{nome:string, idade:number} = {
//     idade: 16,
//     nome: "Clara Baida"
// }

// pessoa.nome = "Clarinha"
// console.log(pessoa)

// //TYPE
// type EstudanteType = {
//     nome: string,
//     idade: number,
//     cpf: number
// }

// const estudante: EstudanteType = {
//     nome: "Lívia",      
//     idade: 17,
//     cpf: 98689347632
// }

// console.log(estudante)

// //Funções no JavaScript
// function soma(a:number,b:number):number|undefined {
//     return a+b
// }

// console.log(`Resultado da soma: ${soma(10,20)}`)


// const vetorExemplo = []
// console.log(vetorExemplo)
// vetorExemplo.pop()
// console.log(vetorExemplo)

// function somaA(a:number,b:number):number {
//     return a+b
// }

// const somaB = function(a:number,b:number):number {
//     return a+b
// }

// const somaC = (a:number,b:number):number=> {
//     return a+b
// }

// const somaD = (a:number, b:number):number=>a+b

// const somay = (a,b)=>a+b

// //ATIVIDADE
// //Primeira atividade com tipagem do typescript

// //Crie uma função par()
// //Recebe um número e se ele for par retorna true, se não for retorna falsa
// //Use tipagem do typescript na função

// //Exemplo 1   par(10)  //true
// //Exemolo 2   par(11)  //false
// //Exemolo 3   par(0)   //undefined
// //Exemolo 4   par(-1)  //undefined

// function par(n:number):boolean|undefined {
//     if (n%2 == 0 && n > 0) {
//         return true
//     } else {
//         if (n > 0) {
//             return false
//         } else {
//             return undefined
//         }
//     }
// }

// console.log(`Resultado da função: ${par(2)}`)
// console.log(`Resultado da função: ${par(5)}`)
// console.log(`Resultado da função: ${par(0)}`)
// console.log(`Resultado da função: ${par()}`)

// ///////////////////////////////////////////////////////////////////////////////////

// //ATIVIDADE
// // Crie uma função que receba um vetor e some os números do vetor
// //Quando o vetor for vazio retorna undefined

//somaNumeros([1,2,3,4])
//10

// function somaNumeros(vetor: number[]):number|undefined {
//     let soma:number = 0
//     for (let i = 0; i < vetor.length; i++) {
//         soma += vetor[i]
//       }
//       if (vetor.length == 0) {
//         return undefined
//     } else {
//         return soma
//     }
// }

// console.log(`Resultado da função 2: ${somaNumeros([1,2,3,4])}`)
// console.log(`Resultado da função 2: ${somaNumeros([5,6])}`)
// console.log(`Resultado da função 2: ${somaNumeros([10,10])}`)
// console.log(`Resultado da função 2: ${somaNumeros([])}`)

// /////////////////////////////////////////////////////////////////////////////////

// //ATIVIDADE
// //Crie uma função que receba um vetor e um número, sua função deve somar as posições do vetor elevado ao número recebido por parâmetro
// //Se o vetor for vazio devolva undefined

// //Exemplo somaElevado([2,2,2],2) //12

// function somaElevado(vetor2:number[], num:number):number|undefined {
//     let somaV:number = 0
//     for (let i = 0; i < vetor2.length; i++) {
//         somaV += (vetor2[i])**num
//       }
//       if (vetor2.length == 0) {
//         return undefined
//     } else {
//         return somaV
//     }
// }

// console.log(`Resultado da função 3: ${somaElevado([1,2,3,4],2)}`)

// ////////////////////////////////////////////////////////////////////

// //MAP -> transformar um vetor em um mapeamento
// // [1,2,3,4] +2
// // [3,4,5,6]

// const vetor:number[] = [1,2,3,4,5]

// const result = vetor.map(
//     function soma2(x:number) {
//         return x+2
//     }
// )
// console.log(result)

//Crie uma função que receba um vetor e devolva o mesmo vetor elevado ao cubo
//ex: eleva([1,2,3]) //[1,8,27]

// const vetor:number[] = [1,2,3,4,5]

// const result = vetor.map(
//     function eleva(x:number) {
//         return x**3
//     }
// )
// console.log(result)

//Crie uma funcção que receba um vetor e um número e devolva um vetor com a soma de cada item com esse número
//ex: somaVetor([1,2,3,4],5) //[6,7,8,9]
// const vetor:number[] = [1,2,3,4,5], num:numero = 5

// const result = vetor.map(
//     function somaVetor(x:number) {
//         return x+5
//     }
// )
// console.log(result)

///////////////////////////////////////////////////

// const vetor = [1,2,3,4,5]
// const result = vetor.filter((x)=>x<3)
// console.log(result)

// const aux:number[] = []
// for(let i=0; i<vetor.length i++) {
//     if(vetor[i]<3) {
//         aux.push vetor[i]
//     }
// }
// console.log()

//Função Find
//Criar uma função que retorna verdadeiro quando é o meu elemento buscado quando não for, retorne false
// const v = [1,5,2,3,4,5,6,5]
// function callbacks(x:number) {
//     return x>4
// }
// let result = v.filter(callbacks)

// console.log(result)

////////////////////////////////////////////////////////////////////////////////////////
//
//EX. Enquanto esperamos o banco responder algo, podemos realizar algo com javascript

//ASSINCRONIDADE --> Não sincronizado
//Não ficar esperando algo que demore  enquanto você pode fazer outras coisas
//Ex. Enquanto esperamos o banco responder podemos fazer outra coisa 

//PROMESSAS:
//É um tipo de objeto no Javascript que é o retorno de uma função que não é síncrona. Esse objeto chamado de (Promise) quando a função termina: Ele pode estar nos dois casos:
//resolve --> Quando a função executou corretamente
// reject --> Quando algo deu errado

// function demora():Promise<string> {
//     let promise = new Promise<string>((resolve, reject)=>{
//         setTimeout(
//             function() {
//                 if(Math.random()<0.5) {
//                     resolve("Dados!!!")
//                 } else {
//                     reject("Não funciona")
//                 }

//             },
//             4000
//         )
//     });
//     return promise
// }

// console.log("Executar algo antes")
// const resultado = demora()

// // .then --> então
// // .catch --> pegar, capturar

// resultado
// .then((resultadoEspera)=>{console.log(resultadoEspera)})
// .catch((resultadoEspera)=>{console.log("Catch " +resultadoEspera)})
// console.log("Executar algo depois")

// // 2017 javascript trouxe esse novo conceito de await e async. Await --> pra você ficar esperando algo que é assíncrono (async)
// //Não podemos utilizar await sem ser uma função assíncrona (async)

// async function aux() {
//     try {
//         const resultado = await demora()
//         console.log("Resultado await: " + resultado)
//     } catch (erro) {
//         console.log("ERRO TRY/CATCH: "+erro)
//     }
// }
// aux()

/////////////////////////////////////////////////////////////////////////////


import mysql, { Connection, ConnectionOptions } from 'mysql2/promise';

import fastify, { FastifyRequest, FastifyReply } from 'fastify'

import cors from '@fastify/cors'

const app = fastify()

app.register (cors)


//////////////////////////////
app.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
  reply.send("Fastify Funcionando!")
})

app.get('/estudantes', async (request: FastifyRequest, reply: FastifyReply) => {


  //banco de dados

  try {
    const conn = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'banco1023a',
      port: 3306
    })
    const resultado = await conn.query("SELECT * FROM estudantes")
    const [dados, camposTabela] = resultado
    reply.status(200).send(dados)

  }
  catch (erro: any) {

    console.log(`❌ Deu erro! :` + erro)
    if (erro.code === "ECONNREFUSED") {
      console.log("❌ ERRO: LIGUE O LARAGON => Conexão recusada")
      reply.status(400).send({mensagem:"❌ ERRO: LIGUE O LARAGON => Conexão recusada"})
    }

    else if (erro.code === 'ER_BAD_DB_ERROR') {
      console.log("❌ ERRO: CRIE UM BANCO DE DADOS  COM O NOME DEFINIDO NA CONEXÃO => Conexão não encontrada")
      reply.status(400).send({mensagem:"❌ ERRO: CRIE UM BANCO DE DADOS  COM O NOME DEFINIDO NA CONEXÃO => Conexão não encontrada"})
    }

    else if (erro.code === 'ER_ACCESS_DENIED_ERROR') {
      console.log("❌ ERRO: CONFERIR O USUÁRIO E SENHA DEFINIDOS NA CONEXÃO => Conexão não encontrada")
      reply.status(400).send({mensagem:"❌ ERRO: CONFERIR O USUÁRIO E SENHA DEFINIDOS NA CONEXÃO => Conexão não encontrada"})
    }

    else if (erro.code === 'ER_NO_SUCH_TABLE') {
      console.log("❌ ERRO: Você deve criar a tabela com o mesmo nome da sua QUERY")
      reply.status(400).send({mensagem:"❌ ERRO: Você deve criar a tabela com o mesmo nome da sua QUERY"})
    }
     else if
      (erro.code === 'ER_PARSE_ERROR') {
      console.log("❌ ERRO: Você tem um erro de escrita em sua QUERY confira: VÍRGULAS, PARENTESES E NOME DE COLUNAS")
      reply.status(400).send({mensagem:"❌ ERRO: Você tem um erro de escrita em sua QUERY confira: VÍRGULAS, PARENTESES E NOME DE COLUNAS"})
    }
    else {
      console.log(erro)
      reply.status(400).send({mensagem:"❌ ERRO: Não identificado"})
    }
  }

})

app.listen({ port: 8000 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`);
});

