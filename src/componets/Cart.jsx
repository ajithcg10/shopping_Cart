import React from "react";
import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { CartItem } from "../context/Context";

export default function Cart() {
  const {
    state: { cart },
    dispatch,
  } = useContext(CartItem);

  return (
    <div>
      <Container>
        {cart.length ? (
          cart.map((item) => {
            return (
              <LeftSection>
                <Box>
                  <ImageContainer>
                    <Image src={item.image} />
                  </ImageContainer>
                  <DetailsContainer>
                    <ProducatName>{item.name}</ProducatName>
                    <Price>{item.price.split(".")[0]}</Price>
                  </DetailsContainer>
                </Box>
                <RigthSection
                  onClick={() =>
                    dispatch({
                      type: "Remove_TO_Cart",
                      payload: item,
                    })
                  }
                >
                  <AiFillDelete />
                </RigthSection>
              </LeftSection>
            );
          })
        ) : (
          <span>Cart is Empty!</span>
        )}
        <Link to="/cart">
          <Button>Go to Cart</Button>
        </Link>
      </Container>
    </div>
  );
}
const Container = styled.div`
  padding: 20px;
  background: aliceblue;
  position: absolute;
  width: 300px;
  /* right: 100px; */
  right: 70px;
  top: 71px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const LeftSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 20px;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
`;
const ImageContainer = styled.div`
  width: 50px;
  margin-right: 15px;
`;
const Image = styled.img`
  width: 100%;
  border-radius: 50%;
  display: block;
`;
const DetailsContainer = styled.div``;
const ProducatName = styled.h5``;
const Price = styled.h6``;
const RigthSection = styled.div``;
const Button = styled.a`
  padding: 10px;
  display: inline-block;
  background-color: blue;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  margin-top: 10px;
`;
