import React, { useState } from "react";
import { useContext } from "react";
import styled from "styled-components";
import { FaCartArrowDown } from "react-icons/fa";
import { BsCaretDownFill } from "react-icons/bs";
import { CartItem } from "../context/Context";
import Cart from "./Cart";
import { Link } from "react-router-dom";

export default function Header() {
  const [isopen, setOpen] = useState(false);

  const {
    state: { cart },
    productdispatch,
  } = useContext(CartItem);

  return (
    <div>
      <Container>
        <Wrapper className="Wrapper">
          <Logo to="/">Jameela Store</Logo>
          <InPut
            placeholder="Serach a product..."
            onChange={(e) => {
              productdispatch({
                type: "SerachQuery",
                payload: e.target.value,
              });
            }}
          />

          <CartContainer onClick={() => setOpen(!isopen)}>
            <CartIconContainer>
              <FaCartArrowDown />
            </CartIconContainer>
            <span style={{ color: "#fff", marginRight: "10px" }}>
              {cart.length}
            </span>
            <DownCOnatiner>
              <BsCaretDownFill />
            </DownCOnatiner>
          </CartContainer>
        </Wrapper>
      </Container>
      {isopen && <Cart />}
    </div>
  );
}
const Container = styled.div`
  background-color: #343a40;
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 8px 0px;
  height: 80px;
  align-items: center;
`;
const Logo = styled(Link)`
  color: #fff;
  font-weight: 100;
  font-size: 28px;
`;

const InPut = styled.input`
border: none;
outline: none;
width: 500px;
padding: 10px;
border-radius: 6px;
}
`;
const CartContainer = styled.div`
  background-color: #28a745;
  /* width: 100px; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px 31px;
  border-radius: 6px;
`;
const CartIconContainer = styled.div`
  margin-right: 10px;
  color: #fff;
`;
const DownCOnatiner = styled.div`
  color: #fff;
`;
