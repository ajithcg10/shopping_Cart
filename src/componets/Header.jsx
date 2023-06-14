import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { FaCartArrowDown } from "react-icons/fa";
import { BsCaretDownFill } from "react-icons/bs";
import { CartItem } from "../context/Context";

export default function Header() {
  const {
    state: { cart },
  } = useContext(CartItem);
  console.log();
  return (
    <div>
      <Conatiner>
        <Wrapper className="Wrapper">
          <Logo>Jameela Store</Logo>
          <InPut placeholder="Serach a product..." />
          <CartConatiner>
            <CartIconConatiner>
              <FaCartArrowDown />
            </CartIconConatiner>
            <span>{cart.length}</span>
            <DownCOnatiner>
              <BsCaretDownFill />
            </DownCOnatiner>
          </CartConatiner>
        </Wrapper>
      </Conatiner>
    </div>
  );
}
const Conatiner = styled.div`
  background-color: #343a40;
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0px;
  height: 80px;
  align-items: center;
`;
const Logo = styled.h1`
  color: #fff;
  font-weight: 100;
  font-size: 28px;
`;
const InputConatiner = styled.div``;
const InPut = styled.input`
border: none;
outline: none;
width: 500px;
padding: 10px;
border-radius: 6px;
}
`;
const CartConatiner = styled.div`
  background-color: #28a745;
  /* width: 100px; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px 31px;
  border-radius: 6px;
`;
const CartIconConatiner = styled.div`
  margin-right: 10px;
  color: #fff;
`;
const DownCOnatiner = styled.div`
  color: #fff;
`;
