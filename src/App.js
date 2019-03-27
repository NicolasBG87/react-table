import React from "react";
import { createGlobalStyle } from "styled-components";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Table from "./components/Table";

import Data from "./MOCK_DATA.json";

const GlobalStyle = createGlobalStyle`
  html, body {
    @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700');
    font-family: 'Lato', sans-serif;
  }
  * {
    box-sizing: border-box;
    outline: none;
    padding: 0;
    margin: 0;
  }
`;

const App = () => {
  return (
    <div>
      <Header />
      <Table tableData={Data} />
      <Footer />
      <GlobalStyle />
    </div>
  );
};

export default App;
