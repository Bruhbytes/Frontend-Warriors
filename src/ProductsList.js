import React  from "react";
//import Products from "./Products";
import 'flowbite'; 


const ProductsList = ({ Products }) => {
     return (

    <div className='section-center'>
      {Products.map((Products) => {
        const {itemCategory,itemName,itemId,itemDescription,itemImg,price } = Products;
        return (
          <article key={itemId} className='menu-item'>
            <img src={itemImg} alt={itemName} className='photo' />

            
            <div className='item-info'>
              <header>
                <h4>{itemName}</h4>
                <h4 className='price'>${price}</h4>
              </header>
              <p className='item-text'>{itemDescription}</p>
            </div>
          </article>
        );
      })}
    </div>
  )
  };
  
  export default ProductsList;