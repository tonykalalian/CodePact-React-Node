import React, { useEffect, useState } from "react";
import CategoryService from "../../services/CategoryService";
import ProductCategory from "../../services/ProductService";
import CustTable from "../resuables/CustTable";
import ProductService from "../../services/CategoryService";

const Category = () => {

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        loadCategories();
        loadProducts();
    }, []);


    const loadCategories = () => {
        CategoryService.getCategories().then((result)=>{
            setCategories(result?.data);
        })
    }

    const loadProducts = () => {
        ProductService.getCategories().then(result =>{
            setProducts(result?.data);
        });
    }

    return (
        <>
            <h3>Category</h3>
            <CustTable data={categories} />
            <CustTable data={products} />
        </>
    )
}

export default Category;