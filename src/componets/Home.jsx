import React from "react";
import styled from "styled-components";
import Filter from "./Filter";
import SinglePage from "./SinglePage";

export default function Home() {
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
