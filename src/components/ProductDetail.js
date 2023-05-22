import React, { useEffect, useState } from "react";
import img from '../asstes/Images/img1.1-product.webp';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// // import { useLocation, useParams } from "react-router-dom";
import { products } from '../constants/products';

    const  Detailproduct =({  })=>{
        const [openModel,setOpenModel] = useState(false)
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const[data,setData] = useState('')
        // const location = useLocation();
        const navigate = useNavigate();
        const params = useParams();
        
    const {id} = params;
    useEffect(()=>{
    // console.log(products);    
    let newdT = products.filter((product)=>{
        if(product.id==id){
            return product
        }
        
    })
   
    setData(newdT[0])
    },[products])


        return (
            <>
           
            <div className="detail-product-container" show={show} onHide={handleClose}>
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
                <div className=''>{'Available sizes: '}{data?.availableSizes?.toString()}</div>
                <div className="button" onClick = {() => {navigate(`/addtocart`)}} style={{width:'80%',gap:'10%'}}>Add To Cart</div>
                </div>  
            </div>
        </>
);
}

export default Detailproduct;