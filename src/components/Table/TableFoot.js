import React, { useState } from "react";
import styled from "styled-components";

import * as util from "../../util";
import * as icon from "../../icons";

const Container = styled.td`
  background: #283d3b;
  color: white;

  & input,
  select {
    border: none;
    padding: 5px;
    margin: 0 10px;

    &[type="number"]::-webkit-inner-spin-button,
    &[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  & svg {
    cursor: pointer;
    margin: 0 10px;
    transform: scale(1.5);
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }
`;

const TableFoot = ({
  pages,
  columns,
  currentPage,
  setCurrentPage,
  filterTable
}) => {
  const [filterParam, setFilterParam] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const fiterData = value => {
    setFilterValue(value);
    filterTable(filterParam, value);
  };

  return (
    <tfoot>
      <tr>
        <Container colSpan={columns.length + 1}>
          <Wrapper>
            <div>
              <label htmlFor="filter">Filter By: </label>
              <select
                name="filter"
                value={filterParam}
                onChange={e => setFilterParam(e.target.value)}
              >
                <option value="" disabled>
                  --Choose a filter--
                </option>
                {columns.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {util.formatHeader(item)}
                    </option>
                  );
                })}
              </select>
              <input
                type="text"
                value={filterValue}
                onChange={e => fiterData(e.target.value)}
              />
            </div>
            <div>
              <span onClick={e => setCurrentPage(1)}>
                {icon.arrowDoubleLeft()}
              </span>
              <span onClick={e => setCurrentPage(currentPage - 1)}>
                {icon.arrowLeft()}
              </span>
              <span>
                Page
                <input
                  type="number"
                  value={currentPage}
                  min={0}
                  max={Math.round(pages)}
                  onChange={e =>
                    e.target.value >= 0 && e.target.value < Math.round(pages)
                      ? setCurrentPage(e.target.value)
                      : null
                  }
                />
                of {pages > 1 ? Math.round(pages) : 1}
              </span>
              <span onClick={e => setCurrentPage(currentPage + 1)}>
                {icon.arrowRight()}
              </span>
              <span onClick={e => setCurrentPage(pages)}>
                {icon.arrowDoubleRight()}
              </span>
            </div>
          </Wrapper>
        </Container>
      </tr>
    </tfoot>
  );
};

export default TableFoot;
