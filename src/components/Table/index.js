import React, { useState } from "react";
import styled from "styled-components";

import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableFoot from "./TableFoot";

const Table = styled.table`
  margin: 50px auto;
  border-collapse: collapse;
`;

const index = ({ tableData }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState(tableData);

  const RECORDS_LENGTH = data.length / 10;
  const COLUMNS = Object.keys(data[0]);

  const sortTable = value => {
    const sortedData = data.slice().sort((a, b) => {
      return a[value] < b[value] ? -1 : 1;
    });
    setData(sortedData);
    setCurrentPage(0);
  };

  const filterTable = (filterParam, filterValue) => {
    const filteredData = tableData.filter(item => {
      return String(item[filterParam]).includes(filterValue);
    });
    setData(filteredData);
  };

  return (
    <Table>
      <TableHead titles={COLUMNS} sortTable={sortTable} />
      <TableBody
        data={data.filter(
          (item, index) =>
            index >= currentPage * 10 && index < currentPage * 10 + 10
        )}
      />
      <TableFoot
        pages={RECORDS_LENGTH - 1}
        columns={COLUMNS}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        filterTable={filterTable}
      />
    </Table>
  );
};

export default index;
