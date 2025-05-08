import React from "react";
import Moment from "moment";

import {Product} from "../models/product";

export default function ProductView({product, idx}: {product: Product, idx: number}){

    function onEdit(productId: number){
        alert("productId: "+productId );
    }

    function onDelete(productId: number){
        alert("productId: "+productId );
    }

    return(
        <tr>
            <th scope="row">{idx + 1}</th>
            <td>{Moment(product.OrderDate).format("MM/DD/YYYY")}</td>
            <td>{product.ProductName}</td>
            <td>{product.Description}</td>
            <td>{product.Quantity}</td>
            <td>{product.Price.toLocaleString(navigator.language, { minimumFractionDigits: 2 })}</td>
            <td>{product.Total.toLocaleString(navigator.language, { minimumFractionDigits: 2 })}</td>
            <td>
                <button type="button" className="btn btn-outline-primary" onClick={()=>onEdit(product.ProductId)}>Edit</button>&nbsp;
                <button type="button" className="btn btn-outline-primary"onClick={()=>onDelete(product.ProductId)}>Delete</button>
            </td>
        </tr>
    );
}
