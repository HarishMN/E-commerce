import React, { useState } from "react";
import { availableSizes } from "../constants/products";
const Size =({setSelectedSize})=>{
    const takeSize=(size)=>{
        setSelectedSize(size)
    }

    return(
        <>
        {availableSizes?.map((ele, i) => (

            <div className="size-container"
            onClick={() => takeSize(ele)}
            >
            <div className="size-text"  >{ele}</div>
        </div>
            ))}
            </>

    )
};
export default Size;