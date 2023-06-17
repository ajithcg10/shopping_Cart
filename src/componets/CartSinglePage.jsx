import React from "react";
import { styled } from "styled-components";
import CartAmount from "./CartAmount";
import CartDetails from "./CartDetails";

export default function CartSinglePage() {
  return (
    <div>
      <Container>
        <Wrapper className="Wrapper">
          <CartDetails />
          <CartAmount />
        </Wrapper>
      </Container>
    </div>
  );
}
const Container = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
  flex-wrap: wrap;
`;
