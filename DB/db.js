const mysql = require("mysql2/promise");
const config = require("./config");

var connection;

// async/await
const connect = async () =>{
    try{
        connection = await mysql.createConnection(config.db);
        console.log("=============================================================");
        console.log(`>>>> Connection to ${process.env.DB_NAME} successful` );
        console.log("=============================================================");
        

    }catch(error){
        console.error(`>>> Error connecting to database ${process.env.DB_NAME}`, error);
        process.exit(1);
    }
}

const query = async (sql, params) =>{
    
    if(!connection){
        await connect();
    }

    try{
        const [results] = await connection.execute(sql, params);
        return results;
    }catch(error){
        console.error(`Query ERROR -> ${sql}: ${error.message}`);
    }

} 

module.exports = {
    query,
};