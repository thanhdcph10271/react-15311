import React from 'react'
import ProductItem from '../ProductItem'

const Product = () => {
    const product=[
        {id:'PH12547',name:"Phạm Đức Việt Anh"},
        {id:'PH11565',name:"Phạm Thế Anh"},
        {id:'PH12174',name:"Trần Thế Cường"}
    ]
    return (
        <div>
            
         {product.map(({id,name},index)=>{
           return <p> <ProductItem name={name}  /> MSSV: {id} </p>
         })}  
        </div>
    )
}

export default Product
