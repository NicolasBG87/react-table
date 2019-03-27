import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #283d3b;
  color: white;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5);
  & h1 {
    padding: 10px 0;
    text-align: center;
  }
`;

const Header = () => {
  return (
    <Container>
      <h1>React Table</h1>
    </Container>
  );
};

export default Header;
