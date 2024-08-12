import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import MainStructure from "../pages/home/MainStructure";

export default function MainRoutes() {
  return (
    <Routes>
        {/* Những trang có navbar footer */}
        <Route path="/" element={<MainStructure/>} >
            <Route index element={<Home/>} ></Route>
            <Route path="products" element={<Products/>} ></Route>
        </Route>
        
    </Routes>
  )
}
