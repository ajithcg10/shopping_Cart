import React from "react";

import { useContext } from "react";
import styled from "styled-components";
import { CartItem } from "../context/Context";
import Raiting from "./Raiting";

export default function Filter() {
  const {
    prductstate: { byRaating, byStock, byFastdelivery, sort },
    productdispatch,
  } = useContext(CartItem);

  return (
    <div>
      <Container>
        <Title>Filter Products</Title>
        <FeatureContainer>
          <Item>
            <AscendingInput
              type="radio"
              id="ascending"
              name="fav_sort"
              checked={sort === "lowTohigh" ? true : false}
              onChange={() => {
                productdispatch({
                  type: "Sort_By_Price",
                  payload: "lowTohigh",
                });
              }}
            />
            <label for="ascending">Ascending</label>
          </Item>
          <Item>
            <DescendingInput
              type="radio"
              id="descending"
              name="fav_sort"
              checked={sort === "hightTolow" ? true : false}
              onChange={() => {
                productdispatch({
                  type: "Sort_By_Price",
                  payload: "hightTolow",
                });
              }}
            />
            <label for="descending">Descending</label>
          </Item>
          <Item>
            <StockInput
              type="checkbox"
              id="stock"
              name="stock"
              checked={byStock}
              onChange={() => {
                productdispatch({
                  type: "Remove_Out_of_Stock",
                });
              }}
            />
            <label for="stock">Remove Out of Stock</label>
          </Item>
          <Item>
            <DeliveryInput
              type="checkbox"
              id="delivery"
              checked={byFastdelivery}
              name="delivery"
              onChange={() => {
                productdispatch({
                  type: "Fast_Delivery_Only",
                });
              }}
            />
            <label for="delivery">Fast Delivery Only</label>
          </Item>
          <Item>
            <label for="Rating:">Rating:</label>
            <Raiting
              rating={byRaating}
              add={(i) =>
                productdispatch({
                  type: "Rating",
                  payload: i,
                })
              }
            />
          </Item>
          <ClearButton
            onClick={() => {
              productdispatch({
                type: "Clear_Filters",
              });
            }}
          >
            Clear Filters
          </ClearButton>
        </FeatureContainer>
      </Container>
    </div>
  );
}
const Container = styled.div`
  background-color: #343a40;
  color: #fff;
  width: 300px;
  padding: 20px;
  height: 70vh;
`;
const Title = styled.h4`
  margin-bottom: 30px;
`;
const FeatureContainer = styled.div``;
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
