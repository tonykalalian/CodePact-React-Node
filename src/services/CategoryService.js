import http from  "../http-common";

const getCategories = () =>
{
    return http.get(`/categories/getCategories`);
}

// const create = (data) =>{
//     return http.post(`/products/insertProduct`, data);
// }

// const update = (data) => {
//     return http.post(`/products/updateProduct`, data);
// }

// const remove = (id) =>{
//     return http.post(`/products/deleteProduct`, {id});
//     //return http.delete(`/users/deleteUser/${id}`);
// }

const ProductService = {
    getCategories,
   
}

export default ProductService;