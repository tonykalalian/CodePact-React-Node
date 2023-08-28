const db = require("../DB/db");
const { formatDate } = require("../helper");

const getProducts = async () => {

    const sql = `SELECT * FROM products 
    JOIN suppliers ON products.supplier_id = suppliers.supplier_id 
    JOIN categories ON categories.category_id = products.category_id;`;
    try {
        const users = await db.query(sql);
        return users
    } catch (error) {
        console.error(error);
        return { message: "internal error" }
    }
}


const insertProduct = async (data) =>{
    const {categoryId, supplierId, productName, productDesc, productPrice, productQty, productDis, productLowStock, productOptimalStock} = data;
    const sql = `INSERT INTO tatweer_db.products 
    (category_id, supplier_id, product_name, product_desc, product_price, product_qty, product_disc, product_low_stock, product_optimal_stock) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    try{
        await db.query(sql, [categoryId, supplierId, productName, productDesc, productPrice, productQty, productDis, productLowStock, productOptimalStock]);
        return ({message: "SUCCESS"});
    }catch(error){
        return({message: "Failure"});
    }
}

const updateProduct = async (data) =>{
    const {productId, categoryId, supplierId, productName, productDesc, productPrice, productQty, productDis, productLowStock, productOptimalStock} = data;
    const sql = `UPDATE products SET 
    category_id = ?, supplier_id = ?,  product_name = ?, product_desc = ?, product_price = ?, product_qty = ?, product_disc = ?, product_low_stock = ?, product_optimal_stock = ? 
    WHERE product_id = ?`;

    try{
        await db.query(sql, [ categoryId, supplierId, productName, productDesc, productPrice, productQty, productDis, productLowStock, productOptimalStock, productId]);
        return ({message: "Success"})
    }catch(error){
        return ({message: "Failure"});
    }
}

const deleteProduct = async (id) =>{
    const sql = `DELETE FROM products WHERE product_id = ?`;
    try{
        await db.query(sql, [id]);
        return({message: "Success"});
    }catch(error){
        return({message: "Failure"});
    }

}


module.exports = {
    getProducts,
    insertProduct,
    updateProduct,
    deleteProduct,
}