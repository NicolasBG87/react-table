import React from "react";
import styled from "styled-components";

import * as util from "../../util";

const THead = styled.thead`
  background: rgba(0, 0, 0, 0.1);

  & th {
    padding: 10px;
    border: 2px solid black;
    cursor: pointer;
  }
`;

const TableHead = ({ titles, sortTable }) => {
  return (
    <THead>
      <tr>
        {titles.map((item, index) => (
          <th key={index} onClick={e => sortTable(item)}>
            {util.formatHeader(item)} ▾
          </th>
        ))}
      </tr>
    </THead>
  );
};

export default TableHead;
