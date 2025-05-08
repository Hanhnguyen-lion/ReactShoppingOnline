import React, {useState, useEffect} from "react";
import Moment from "moment";


import MenuItems from "../menus/menu_items";
import axios from "axios";
import { Product } from "../models/product";
import ProductView from "./productView";
import ProductHeader from "./productHeader";

export default function Products(){
    const api_url: string = "http://localhost:5256/api/shopping";
    const [products, setProducts] = useState([]);

    async function getProducts(){
        const url = `${api_url}/products`
        await axios.get(url).then( res => setProducts(res.data));
    }

    useEffect(() =>{
        getProducts();
    },[]);

    return (
    <>
        <MenuItems></MenuItems>
        <h1 style={{textAlign: "center"}}>Products List</h1>
        <br/>
            <div className="table-responsive text-center">
                <table className="table table-striped">
                    <thead>
                        <ProductHeader></ProductHeader>
                    </thead>
                    <tbody>

                    {
                        products.map((product: Product, idx) =>
                            <ProductView product={product} idx={idx} ></ProductView>
                        )   
                    }
                    </tbody>
                </table>
            </div>
    </>
    );
}