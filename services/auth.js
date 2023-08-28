const db = require("../DB/db");
const { formatDate } = require("../helper");


const authenticate = async (data) =>{
    const { email, password } = data;
    const sql = `SELECT * FROM client
    join country on client.country_id = country.country_id
     WHERE client_email = ? AND client_password = ?`;
    try {
        const user = await db.query(sql, [email, password]);

        if (!user) {
            return { status: 401, message: "cannot login with these credentials!" }
        }

        return { status: 200, message: "Successful", user: user }
    } catch (error) {
        return { status: 500, message: "internal error" }
    }

}

const register = async (user) =>{
    const {email, firstName, lastName, password, mobile, address, dob, countryID} = user;
    const sql = `INSERT INTO client (client_first_name, client_last_name, client_password, client_email, client_address, client_dob, country_id, client_mobile) 
    VALUES (?, ?, ?, ?, ?, ?, ?)`;
    try{
        const result = await db.query(sql, [firstName, lastName, password, email, address, formatDate(dob), countryID, mobile]);
        if(result.affectedRows){
            return {status : "success", message: "Registration Success"}
        }else{
            return {status: "error", message: "Error registiring client"}
        }
    }catch(error){
        return {status: 500, message: "Internal error"}
    }
}

const changeUserDetails = async (data) =>{
    const {clientId, email, firstName, lastName, password, mobile, address, dob, countryID} = data;
    const sql = `UPDATE client SET client_first_name = ? , client_last_name = ?, client_password = ?, client_email = ?, client_address = ?, client_dob = ?, country_id, client_mobile 
    WHERE client_id = ?`;
    try{
        const result = await db.query(sql, [firstName, lastName, password, email, address, formatDate(dob), countryID, mobile, clientId]);
        if(result.affectedRows){
            return {status : "success", message: "updated successfully"}
        }else{
            return {status: "error", message: "error"}
        }
    }catch(error){
        return {status: 500, message: "internal error"}
    }
}

module.exports ={
    authenticate,
    register,
    changeUserDetails,
}