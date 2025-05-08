import React from "react";

export default function ProductHeader(){
    return(
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
    );
}