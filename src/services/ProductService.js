import http from "../http-common";
import { getToken } from "../utils/UTILS";

const getProducts = () => {
    return http.get(`/products/getProducts`, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });
}

const create = (data) => {
    return http.post(`/products/insertProduct`, data);
}

const update = (data) => {
    return http.post(`/products/updateProduct`, data);
}

const remove = (id) => {
    return http.post(`/products/deleteProduct`, { id });
    //return http.delete(`/users/deleteUser/${id}`);
}

const ProductService = {
    getProducts,
    create,
    update,
    remove,
}

export default ProductService;