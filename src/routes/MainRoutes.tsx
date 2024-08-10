import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";

export default function MainRoutes() {
  return (
    <Routes>
        {/* Những trang có navbar footer */}
        <Route path="/" element={<Home/>} >
            <Route path="products" element={<Products/>} ></Route>
        </Route>
        
    </Routes>
  )
}
