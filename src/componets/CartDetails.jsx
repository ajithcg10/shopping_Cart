import React from "react";
import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { styled } from "styled-components";
import { CartItem } from "../context/Context";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
export default function CartDetails() {
  const {
    state: { cart },
    dispatch,
  } = useContext(CartItem);

  return (
    <Container>
      {cart.map((item) => {
        return (
          <MainContainer>
            <LeftContainer>
              <ImageContainer>
                <Image src={item.image} />
              </ImageContainer>
              <ProductName>{item.name}</ProductName>
              <ProductPrice>&#8377; {item.price.split(".")[0]}</ProductPrice>
            </LeftContainer>
            <CenterContainer>
              {[...Array(5)].map((_, i) => {
                return item.ratings > i ? <AiFillStar /> : <AiOutlineStar />;
              })}
            </CenterContainer>
            <RigthContaniner>
              <Select
                value={item.qty}
                onChange={(e) => {
                  dispatch({
                    type: "Change_Cart_Qty",
                    payload: {
                      id: item.id,
                      qty: e.target.value,
                    },
                  });
                }}
              >
                {[...Array(item.inStock).keys()].map((i) => {
                  return <option key={i + 1}>{i + 1}</option>;
                })}
              </Select>
              <AiFillDelete
                onClick={() => {
                  dispatch({
                    type: "Remove_TO_Cart",
                    payload: item,
                  });
                }}
              />
            </RigthContaniner>
          </MainContainer>
        );
      })}
    </Container>
  );
}
const Container = styled.div`
  width: 65%;
`;
const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #dddd;
  padding: 10px;
  align-items: center;
`;
const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ImageContainer = styled.div`
  width: 200px;
  margin-right: 30px;
`;
const Image = styled.img`
  display: block;
  width: 100%;
`;
const ProductPrice = styled.h6``;
const ProductName = styled.h5`
  margin-right: 30px;
`;
const CenterContainer = styled.div``;
const RigthContaniner = styled.div`
  display: flex;
  display: flex;
  align-items: center;
`;
const Select = styled.select`
  display: inline-block;
  /* padding: 5px 33px; */
  margin-right: 30px;
  height: 31px;
  width: 69px;
  text-align: center;
  border-radius: 5px;
`;
