import React,{useState,useEffect } from "react";
import useFetch from "./useFetch";
import ProductsList from "./ProductsList"; 
import Categories from "./Categories";
import Products from "./Products";
const allCategories = ['all', ...new Set(Products.map((Product) => Product.itemCategory))];

const Shop = () => {
  //const {Products,isPending,error}= useFetch("http://localhost:3001/Products");
  
    console.log(Products);
  
  console.log(allCategories);
  const [menuProduct, setMenuProduct] = useState(Products);

  
  // const [Product, setProduct] = useState(Products);
   const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
     if (category === 'all') {
       setMenuProduct(Products);
       return;
     }
     const newProducts = Products.filter((Product) => Product.itemCategory === category);
     setMenuProduct(newProducts);
   };
    
 
  

  
  
    return ( 
        <main>
          <section className="menu section"> 
      <div className="title">
          <h2>our shop</h2>
          <div className="underline"></div>
        </div>
        <>
        <img src="./prodpics/dumbell.jpg"/>
        </>
        
        
        
         
         <Categories categories={categories} filterItems={filterItems} /> 
        <div className="shop">
          
          {<div className="display products">
         <ProductsList Products={menuProduct} />
         </div>}

        </div>
        </section>
        </main>
     );
}
 
export default Shop;