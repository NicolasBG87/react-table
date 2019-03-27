import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #283d3b;
  color: white;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5);
  width: 100%;
  text-align: center;
  padding: 10px 0;
  box-shadow: -2px -3px 5px rgba(0, 0, 0, 0.5);
  position: fixed;
  bottom: 0;
  left: 0;
`;

const Footer = () => {
  return <Container>{new Date().getFullYear()} by Rzasa!</Container>;
};

export default Footer;
