 import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
//import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Container = styled.div`
  height: 60px;

`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;

`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
 
`;


const NavbarEcom = () => {
  const quantity= useSelector(state=>state.cart.quantity)  
  console.log(quantity)
  return ( 
        <div>
             <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Our Shop</Logo>
        </Center>
        <Right>
          
          <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary"> 
              <ShoppingCartOutlined />
          </Badge>
            
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
        </div>
     );
}
 
export default NavbarEcom;