import React, { useContext } from "react";
import { CartItem } from "../context/Context";
import styled from "styled-components";

import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

export default function SinglePage() {
  const {
    state: { products },
  } = useContext(CartItem);
  const {
    state: { cart },
    dispatch,
  } = useContext(CartItem);
  const {
    prductstate: { byStock, byFastdelivery, byRaating, serachQuery, sort },
  } = useContext(CartItem);
  const filterProduct = () => {
    let sorteditem = products;
    if (sort) {
      sorteditem = sorteditem.sort((a, b) =>
        sort === "lowTohigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (byStock) {
      sorteditem = sorteditem.filter((p) => p.inStock);
    }
    if (byFastdelivery) {
      sorteditem = sorteditem.filter((p) => p.fastDelivery);
    }
    if (byRaating) {
      sorteditem = sorteditem.filter((p) => p.ratings > byRaating);
    }
    if (serachQuery) {
      sorteditem = sorteditem.filter((p) =>
        p.name.toLowerCase().includes(serachQuery)
      );
    }

    return sorteditem;
  };

  return (
    <Conatiner>
      <MainConatiner>
        <Box>
          {filterProduct().map((pro) => {
            return (
              <Item>
                <TopConatiner>
                  <Image src={pro.image} />
                </TopConatiner>
                <BottomConatine>
                  <ProductName>{pro.name}</ProductName>
                  <Price>{pro.price.split(".")[0]}</Price>
                  {pro.fastDelivery ? (
                    <DeliveryTime>fastDelivery</DeliveryTime>
                  ) : (
                    <DeliveryTime>4 days delivery</DeliveryTime>
                  )}
                  <RaitingContiner>
                    {[...Array(5)].map((_, i) => {
                      return pro.ratings > i ? (
                        <AiFillStar />
                      ) : (
                        <AiOutlineStar />
                      );
                    })}
                  </RaitingContiner>
                  {cart.some((i) => i.id === pro.id) ? (
                    <CartButton
                      onClick={() => {
                        dispatch({
                          type: "Remove_TO_Cart",
                          payload: pro,
                        });
                      }}
                    >
                      remove to cart
                    </CartButton>
                  ) : (
                    <CartButton
                      onClick={() => {
                        dispatch({
                          type: "Add_TO_Cart",
                          payload: pro,
                        });
                      }}
                    >
                      {pro.inStock === 0 ? "out of stock" : "Add to cart"}
                    </CartButton>
                  )}
                </BottomConatine>
              </Item>
            );
          })}
        </Box>
      </MainConatiner>
    </Conatiner>
  );
}
const Conatiner = styled.div`
  width: 70%;
`;
const MainConatiner = styled.div`
  width: 100%;
`;
const Box = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`;
const Item = styled.div``;
const TopConatiner = styled.div`
  width: 70%;
`;
const Image = styled.img`
  display: block;
  width: 100%;
`;
const BottomConatine = styled.div``;
const ProductName = styled.h4``;
const Price = styled.h6``;
const RaitingContiner = styled.div``;
const DeliveryTime = styled.h6``;
const CartButton = styled.a`
  padding: 10px;
  display: inline-block;
  background-color: blue;
  color: #fff;
  margin-top: 10px;
`;
