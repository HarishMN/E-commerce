import img from '../asstes/Images/logo.webp';
// ../src/asstes/Images/logo.webp

import React, { useEffect, useState } from 'react';
import { products, availableSizes } from '../constants/products';

import Filter from '../components/Filter';
import ProductList from '../components/ProductList';
import Size from '../components/Size';
import TotalProductsList from '../components/TotalProducts';
import NavigationRoute from '../routes/NavigationRoute';


function BaseLayoutfn() {
    const [filteredProducts, setFilteredProducts] = useState();
    const [selectedSize, setSelectedSize] = useState()
    // console.log(filteredProducts , '===')
    const [filterData,setFilterData] = useState(products) 
    useEffect(()=>{
      if( selectedSize && filteredProducts ){
        const data = products?.filter((ele) => ele.availableSizes?.includes(selectedSize))?.filter(e => e.type === filteredProducts)
  
        setFilterData(data)
      }else if(selectedSize){
        const data =  products?.filter((ele) => ele.availableSizes?.includes(selectedSize))
        setFilterData(data)
      }else if(filteredProducts){
      const data=products?.filter((ele) => ele.type === filteredProducts)
      setFilterData(data)
      }
     
  
    },[selectedSize,filteredProducts])
    return (
      <div className="container">
        <div className='Navbar'><img src={img} width='100px' height='100px'/>E-Commerce </div>
   
        <div className='main-container'>
        <div className='sidebar'>
          <div className='FilterTitle'>Filters</div>
          <div className='FilterName'>Sizes</div>
          <div className='box-container'>
                <Size setSelectedSize={setSelectedSize}/>
            <Filter setFilteredProducts={setFilteredProducts}/>
          </div>
  
        </div>
        <div className='product-Container'>
        <div className='TotalProducts'>Products Available:{filterData.length}</div>
          <div className='products'>
          
          {/* { selectedSize && filteredProducts ?
            products?.filter((ele) => ele.availableSizes?.includes(selectedSize))?.filter(e => e.type === filteredProducts)?.map((data)=>{
              return(
            <ProductList data ={data} />
              )
            }) : selectedSize ? products?.filter((ele) => ele.availableSizes?.includes(selectedSize))?.map((data)=>{
              return(
            <ProductList data ={data} />
              )
            }) : filteredProducts ? products?.filter((ele) => ele.type === filteredProducts)?.map((data)=>{
              return(
            <ProductList data ={data} />
              ) 
            }) : */}
                
            {
             filterData.map((data,index) => {
              return (
                <div 
                className='product-list'
                >
                <ProductList data ={data} key={index}/>
      
                
                </div>
              )
            })  
          }
          </div>
        </div>
        </div>
      </div>
    );
}

export default BaseLayoutfn;