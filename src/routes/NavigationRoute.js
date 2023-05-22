import { Route, Routes } from "react-router-dom";
import ProductList from "../components/ProductList";
import Detailproduct from "../components/ProductDetail";
import BaseLayoutfn from "../components/BaseLayout";
import Cart from "../components/AddtoCart";

const NavigationRoute = ({data})=>{
    return(
        <Routes >
            <Route path="/" element ={<BaseLayoutfn/>}/>
            <Route path="details/:id" element ={<Detailproduct/>}/>
            <Route path="addtocart" element={<Cart/>}/>
        </Routes>
        

    )
}
export default NavigationRoute;