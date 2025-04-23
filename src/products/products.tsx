import React, {useState, useEffect} from "react";
import MenuItems from "../menus/menu_items";
import axios from "axios";

export default function Products(){
    const api_url: string = "http://localhost:5256";
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        axios.get()
    })

    return (
    <>
        <MenuItems></MenuItems>
        <h1 style={{textAlign: "center"}}>Products List</h1>
        <br/>
                <div className="table-responsive text-center">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Order Date</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            <th scope="col">Total</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                </table>
            </div>
    </>
    );
}