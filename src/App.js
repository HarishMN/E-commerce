// import logo from './logo.svg';
// import img from '../src/asstes/Images/logo.webp'
import './App.css';
// import React, { useEffect, useState } from 'react';
// import { products, availableSizes } from './constants/products';
// import Filter from './components/Filter';
// import ProductList from './components/ProductList';
// import Size from './components/Size';
// import TotalProductsList from './components/TotalProducts';
// import NavigationRoute from './routes/NavigationRoute';

import NavigationRoute from "./routes/NavigationRoute";

function App() { 
  // const [filteredProducts, setFilteredProducts] = useState();
  // const [selectedSize, setSelectedSize] = useState()
  // console.log(filteredProducts , '===')
  // const [filterData,setFilterData] = useState(products) 
  // useEffect(()=>{
  //   if( selectedSize && filteredProducts ){
  //     const data = products?.filter((ele) => ele.availableSizes?.includes(selectedSize))?.filter(e => e.type === filteredProducts)

  //     setFilterData(data)
  //   }else if(selectedSize){
  //     const data =  products?.filter((ele) => ele.availableSizes?.includes(selectedSize))
  //     setFilterData(data)
  //   }else if(filteredProducts){
  //   const data=products?.filter((ele) => ele.type === filteredProducts)
  //   setFilterData(data)
  //   }
   

  // },[selectedSize,filteredProducts])
  return (
 
              
        
         
             
              <NavigationRoute />
            
    
          
  );
}
export default App;
