const db = require("../DB/db");
const { formatDate } = require("../helper");
const moment = require("moment-timezone");


const getCategories = async () => {

    const sql = `SELECT * FROM categories`;
    try {
        let result = [];
        const categories = await db.query(sql);
        for(const category of categories)
        {
            let cat = {
                ID: category.category_id,
                Name: category.category_name,
                CreatedAt: moment(category.category_created_at).format("YY-MMM-DD"),
                UpdatedAt: moment(category.category_updated_at).format("YY-MMM-DD"),
            }

            result.push(cat);
        }

        return result;
    } catch (error) {
        console.error(error);
        return { message: "internal error" }
    }
}





module.exports = {
    getCategories,
    
}