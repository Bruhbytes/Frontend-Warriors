import { Add,  Remove } from "@material-ui/icons";
import styled from "styled-components";
import { useEffect, useState } from "react";
import NavbarEcom from "../components/NavbarEcom";
//import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Input } from "@material-ui/core";
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
 
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;


`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
 
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
 
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {

  const cart = useSelector((state) => state.cart);
  const [checkout,setCheckout]=useState('');
  const [address, setAddress] = useState('');
  const [ph, setPh] = useState('');


  const handleSubmit =async( event) => {
    event.preventDefault();
    //console.log("entered in handle submit");
    const amount = cart.total;
   const add= address;
    const phone=ph;
    //const products=[cart.products.map((product) => (product._id,product.quantity))];
    const checkout={amount,ph,address};
    console.log(checkout);
  const response = await fetch('api/orders',{
    method:'POST',
    body: JSON.stringify(checkout),
    headers:{
      'Content-Type':'application/json'
    }
   
  }
  )
  const json =await response.json()
  console.log(json);
  if(response.ok)
  {
    setAddress('');
    setPh('');
  }
  console.log("done post");  
};
  return (
    
    <Container>
      <NavbarEcom />

      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
        <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>
                    Rs. {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>

            <SummaryItem>

              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>{cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>Rs. 0</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>Rs.00</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Address</SummaryItemText>
              <SummaryItemPrice>
              <input
              value={address}
              type="text"
              onChange={(e) => setAddress(e.target.value)}  
            id="address"
            placeholder="India"
            required=""
              />
              </SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Phone number</SummaryItemText>
              <SummaryItemPrice>
              <input
              value={ph}
              type="text"
              onChange={(e) =>
                
                setPh(e.target.value)
              }

              
            id="ph"
            placeholder="1234567890"
            required=""
              />
             
              </SummaryItemPrice>
            </SummaryItem>



            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>{cart.total}</SummaryItemPrice>
              

            </SummaryItem>
            <Button 
            // onSubmit={handleSubmit}
            type="submit">CHECKOUT NOW</Button>
            <form  onSubmit={handleSubmit}>
             <button
        
             type="submit"
        //className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
        
      </button>
      </form>
          </Summary>
        </Bottom>
      </Wrapper>
     
    </Container>
  );
};

export default Cart;