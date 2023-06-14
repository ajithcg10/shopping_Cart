import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Raiting from "./Raiting";

export default function Filter() {
  const [rate, setRate] = useState();
  console.log(rate);
  return (
    <div>
      <Conatiner>
        <Title>Filter Products</Title>
        <FeatureConatiner>
          <Item>
            <AscendingInput type="radio" id="ascending" name="ascending" />
            <label for="ascending">Ascending</label>
          </Item>
          <Item>
            <DescendingInput type="radio" id="descending" name="descending" />
            <label for="descending">Descending</label>
          </Item>
          <Item>
            <StockInput type="checkbox" id="stock" name="stock" />
            <label for="stock">Include Out of Stock</label>
          </Item>
          <Item>
            <DeliveryInput type="checkbox" id="delivery" name="delivery" />
            <label for="delivery">Fast Delivery Only</label>
          </Item>
          <Item>
            <label for="Rating:">Rating:</label>
            <Raiting rating={rate} add={(i) => setRate(i)} />
          </Item>
          <ClearButton>Clear Filters</ClearButton>
        </FeatureConatiner>
      </Conatiner>
    </div>
  );
}
const Conatiner = styled.div`
  background-color: #343a40;
  color: #fff;
  width: 300px;
  padding: 20px;
  height: 70vh;
`;
const Title = styled.h4`
  margin-bottom: 30px;
`;
const FeatureConatiner = styled.div``;
const Item = styled.div`
  margin-bottom: 20px;
`;
const AscendingInput = styled.input`
  margin-right: 10px;
`;
const DescendingInput = styled.input`
  margin-right: 10px;
`;
const StockInput = styled.input`
  margin-right: 10px;
`;
const DeliveryInput = styled.input`
  margin-right: 10px;
`;
const ClearButton = styled.a`
  background: #ffff;
  padding: 10px 20px;
  color: #000;
  margin-top: 15px;
  display: inline-block;
  width: 50%;
  /* margin: auto; */
  text-align: center;
`;
