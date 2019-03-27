import React from "react";
import styled from "styled-components";

const TBody = styled.tbody`
  td {
    padding: 10px;
    border: 2px solid lightgray;
    text-align: center;
    min-width: 35px;

    span {
      font-size: 26px;
    }
  }
`;

const TableBody = ({ data }) => {
  return (
    <TBody>
      {data.map(item => {
        return (
          <tr key={item.id}>
            {Object.values(item).map((td, index) => {
              return <td key={item + "-" + index}>{td}</td>;
            })}
          </tr>
        );
      })}
    </TBody>
  );
};

export default TableBody;
