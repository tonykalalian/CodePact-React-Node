const db = require("../DB/db");
const { formatDate } = require("../helper");




const getAllUsers = async () => {
    
    const sql = `SELECT client_id as id, client_first_name as firstName, client_last_name as lastName, client_email as email, client_mobile as phone FROM client`;
    try{
        const users = await db.query(sql);
        return users
    }catch(error){
        console.error(error);
        return {message: "internal error"}
    }
}

const deleteUser = async (id) => {
    const sql = `DELETE FROM client WHERE client_id = ?`;
    try{
        await db.query(sql, [id]);
        return {message: "deleted succssfully!"};
    }catch(error){
        console.error(error);
        return {message: "internal error"};
    }
}

const insertUser = async (user) =>{
    const {firstName, lastName, email, phone} = user;
    const sql = `INSERT INTO client (client_first_name, client_last_name, client_email, client_mobile) VALUES (?, ?, ?, ?)`;
    try{
        await db.query(sql, [firstName, lastName, email, phone]);
        return {message: "records inserted successfully."}
    }catch(error){
        console.error(error);
        return {message: "Failed to insert"}
    }
}

const updateUser = async (user) => {
    const {id, firstName, lastName, email, phone} = user;
    const sql = `UPDATE client set client_first_name = ?, client_last_name = ?, client_email = ?, client_mobile = ? WHERE client_id = ?`;
    try{
        await db.query(sql, [firstName, lastName, email, phone, id]);
        return {message: "records updated successfully."}
    }catch(error){
        return {message: "Failed to updated"}
    }
}

const authenticateUser = async (user) =>{
    const {username, password} = user;
    const sql = `SELECT * FROM client WHERE client_username = ? AND client_password = ?`;
    try{
        const result = await db.query(sql, [username, password]);
        if(result && result.length > 0){
            return {message: "success", result: result[0]}
        }
        return {message:"Wrong Username/password"}
    }catch(error){
        return {messagge: "error"}
    }
}

const loadRefTableInfo = async (tableName, value, label) =>{

    let sql = `SELECT ${value} as id, ${label} as label FROM ${tableName}`;
    try{
        const result = await db.query(sql);
        return {message: "success", result}
    }catch(error){
        return {message: error}
    }

}


module.exports ={
    getAllUsers,
    deleteUser,
    insertUser,
    updateUser,
    authenticateUser,
    loadRefTableInfo,
}