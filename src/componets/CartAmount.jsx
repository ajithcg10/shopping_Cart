import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { styled } from "styled-components";
import { CartItem } from "../context/Context";

export default function CartAmount() {
  const {
    state: { cart },
  } = useContext(CartItem);
  console.log(cart, "dsudufdu");
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, i) => acc + Number(i.price) * i.qty, 0));
  }, [cart]);

  return (
    <div>
      <Container>
        <Title>Subtotal (3) items</Title>
        <FeatureContainer>
          <TotalPrice>Total: ₹ {total}</TotalPrice>
          <ClearButton>Proceed to Checkout</ClearButton>
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
const TotalPrice = styled.h4``;

const ClearButton = styled.a`
  padding: 10px 20px;
  margin-top: 15px;
  display: inline-block;
  width: 250px;
  text-align: center;
  font-weight: 600;
  background-color: #007bff;
  border-color: #007bff;
  color: #fff;
`;
