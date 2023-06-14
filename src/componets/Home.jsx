import React from "react";
import { useContext } from "react";
import { BsBox } from "react-icons/bs";
import styled from "styled-components";
import { CartItem } from "../context/Context";
import Filter from "./Filter";
import SinglePage from "./SinglePage";

export default function Home() {
  const arr = [1, 2, 31, 3, 13, 1, 3, 1];
  const {
    state: { products },
  } = useContext(CartItem);

  return (
    <div>
      <Container>
        <Filter />
        <SinglePage />
      </Container>
    </div>
  );
}
const Container = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
`;
