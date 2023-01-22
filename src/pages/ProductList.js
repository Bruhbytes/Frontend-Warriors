import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import NavbarEcom from "../components/NavbarEcom";
//import Announcement from "../components/Announcement";
import Products from "../components/Products";
//import Newsletter from "../components/Newsletter";
//import Footer from "../components/Footer";
//import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;

`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;

`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;

`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  console.log(location);
  const cat = (location.pathname.split("/")[2]);
  console.log(cat);

  const [filters,setFilters]= useState({});
  const [sort,setSort]= useState("newest");

  const handleFilters=(e)=>{
    const value=e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  console.log(filters);
  return (
    <Container>
      <NavbarEcom />

      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="cat" onChange={handleFilters}>
            <Option disabled selected>
              All Products
            </Option>
            <Option>Fashion</Option>
            <Option>Equipments</Option>
            <Option>Suppliments</Option>

          </Select>

        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={e=>setSort(e.target.value)}>
            <Option value="newest">newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />

    </Container>
  );
};

export default ProductList;