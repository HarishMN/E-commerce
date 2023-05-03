import logo from './logo.svg';
// import img from '../src/asstes/Images/e-commerce.png';
import img from '../src/asstes/Images/logo.webp'
import './App.css';
import React, { useState } from 'react';
import { products, availableSizes } from './constants/products';
import Filter from './components/Filter';
import ProductList from './components/ProductList';
import Size from './components/Size';
import TotalProductsList from './components/TotalProducts';

function App() { 
  const [filteredProducts, setFilteredProducts] = useState();
  const [selectedSize, setSelectedSize] = useState()
  console.log(filteredProducts , '===')
  return (
    <div className="container">
      <div className='Navbar'><img src={img} width='100px' height='100px'/>E-Commerce</div>
      <div className='main-container'>
      <div className='sidebar'>
        <div className='FilterTitle'>Filters</div>
        <div className='FilterName'>Sizes</div>
        <div className='box-container'>
              <Size setSelectedSize={setSelectedSize}/>
          <Filter setFilteredProducts={setFilteredProducts}/>
        </div>
        {/* <TotalProductsList/> */}
      
      </div>
      <div className='product-Container'>
        <div className='products'>
        { selectedSize && filteredProducts ?
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
          }) : products.map((data) => {
            return (
              <ProductList data ={data} />
            )
          })

          
        }
        </div>
      </div>
      </div>
    </div>
  );
}
export default App;
