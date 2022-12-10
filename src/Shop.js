import React,{useState,useEffect } from "react";
import useFetch from "./useFetch";
import ProductsList from "./ProductsList"; 
import Categories from "./Categories";

const Shop = () => {
  const {Products,isPending,error}= useFetch("http://localhost:3001/Products");
  console.log(Products);
 // const [Product, setProduct] = useState(Products);
  // const allCategories = ['all', ...new Set(Products.map((Product) => Product.itemCategory))];
  
  // const [Product, setProduct] = useState(Products);
  // const [categories, setCategories] = useState(allCategories);
  // const filterItems = (category) => {
  //   if (category === 'all') {
  //     setProduct(Products);
  //     return;
  //   }
  //   const newProducts = Products.filter((Product) => Product.itemCategory === category);
  //   setProduct(newProducts);
  // };
  
    return ( 
        <main>
          <section className="menu section"> 
      <div className="title">
          <h2>our shop</h2>
          <div className="underline"></div>
        </div>
        
        
        
         
        {/* <Categories categories={categories} filterItems={filterItems} /> */}
        <div className="shop">
          {error && <div>{error} </div>}
          {isPending && <div>loading... </div>}
          {<div className="display products">
          {Products && <ProductsList Products={Products} />}
         </div>}

        </div>
        </section>
        </main>
     );
}
 
export default Shop;