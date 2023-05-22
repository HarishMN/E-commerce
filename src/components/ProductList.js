import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import img from '../asstes/Images/img1.1-product.webp'
import Size from '../components/Size';

import '../App.css';
import { useNavigate } from "react-router-dom";

// import UseClickOutside from './UseClickOutSide';
// import img from '../asstes/Images/-1-product.webp'
function ProductList({data, setFilteredProducts}) {
 const [openModel,setOpenModel] = useState(false)
 const navigate = useNavigate();
 const [show, setShow] = useState(false);
 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);
//  const handleShow = (id) => {navigate(`/details/${id}`);};

  return (
    <>

    <div className='productList-container'>
        <div className='img-container'>
        <img src={data.product_img?data.product_img:img} alt='img' width={'100%'} height={'100%'} />
        {data.isFreeShipping ? <div class="top-right">Free Shipping</div>:null}
        </div>
        <div className='product-name'>
            {data.title}
        </div>
        <div className='product-price'>
            {data.currencyFormat}
            {data.price}
        </div>
        <div className='button'onClick={()=>{
           navigate(`/details/${data?.id}`)
        }}>View product Details</div>
    </div>
    <div>
        {/* <RouterComponent/> */}
    </div>
    {/* <Modal show={show} onHide={handleClose}>
        <div style={{position:'absolute',top:'100px',backgroundColor:'gray',width:'400px',height:'600px',left:'40%',right:"50%" ,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
        <div onClick={()=>{handleClose()}} style={{display:'flex',color:'white',position:'absolute',top
        :'0px',right:'10px',fontSize:'x-large',width:'10px',cursor:'pointer'}}>
            X
        </div>
            <div style={{width:'350px',height:'300px'}}>
             <img src={data.product_img?data.product_img:img} alt='img' width={'100%'} height={'100%'} />
        </div>
        <div className='product-name'>
            {data.title}
        </div>
        <div className='product-price'>
            {data.currencyFormat}
            {data.price}
        </div>
        <div style={{padding:'20px'}} >{data.description} </div>
        <div className=''>{'Available sizes: '}{data.availableSizes.toString()}</div>
        <div
        
        // display: flex;
        // flex-wrap: wrap;
        // padding-right: 10PX;
        // padding-left: 10px;
        // gap: 10px;
        // padding-bottom: 10px;
        >
            {/* {data?.availableSizes?.map((data)=>{
                return(
                    <Size setSelectedSize ={data}/>
                )
            })} */}
        {/* </div> */}
        {/* </div>   */}
    {/* </Modal> */}
     </>
   

);
}

export default ProductList;
