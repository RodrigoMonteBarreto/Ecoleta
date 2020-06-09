//Primeiro irá importar a dependência do sqlite3
const sqlite3 =  require("sqlite3").verbose()

//criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
// // utilizar o objeto de banco de dados, para nossas operações
db.serialize(() =>{

//     //com comandos sql, irei fazer
//     //1-criar uma tabela 
//     // db.run(`
//     //     CREATE TABLE IF NOT EXISTS places (
//     //         id INTEGER PRIMARY KEY AUTOINCREMENT,
//     //         image TEXT,
//     //         name TEXT,
//     //         address TEXT,
//     //         address2 TEXT,
//     //         state TEXT,
//     //         city TEXT,
//     //         items TEXT

//     //     );
//     // `)


//     // //2-inserir dados na tabela
//     // const query = `
//     //             INSERT INTO places (
//     //                 image,
//     //                 name,
//     //                 address,
//     //                 address2,
//     //                 state,
//     //                 city,
//     //                 items 
//     //         ) 
                            
//     //         VALUES (?,?,?,?,?,?,?); `
        

//     //     const values = [
//     //         "https://images.unsplash.com/photo-1481761289552-381112059e05?ixlib=rb-1.2.1&auto=format&fit=crop&w=861&q=80",
//     //         "Papersider",
//     //         "Guilherme Gemballa, Jardim América",
//     //         "Nº 260",
//     //         "Santa Catarina",
//     //         "Rio do Sul",
//     //         "Resíduos Eletronicos e Lâmpadas"
//     //     ]

//     //     function afterIsenrtData(err){
//     //         if(err){
//     //             return console.log(err)
//     //         }
            
//     //             console.log("Cadastrado com sucesso")
//     //             console.log(this)
            
//     //     }

//         // a função afeterInsertData só será chamada após a execução dos arquivos, até por isso a chamada
//         // da função logo a baixo não tem parametros, mas apenas o nome da função.
      
      
//         db.run(query, values, afterIsenrtData)

//     //3-consultar/manipular os dados
    
//     // db.all(`SELECT * FROM places`, function(err, rows){
//     //     if(err){
//     //         return console.log(err)
//     //     } 
//     //     console.log("Aqui estão seus registros")
//     //     console.log(rows)
//     // })


    //4-deletar dados

    //  db.run(`DELETE FROM places WHERE id = ?`, [3], function(err){
    //      if(err){
    //          return console.log(err)
    //      } 

    //      console.log("Registro deletado com sucesso!")
    //  })

})