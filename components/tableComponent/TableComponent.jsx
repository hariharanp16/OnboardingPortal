import React from "react";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";

const TableComponent = ({ data, columns }) => {
  const navigate = useNavigate();
  const selectedProjectId = useSelector((state) => state.user.recentlyUsedProjectId);


  const handleRowClick = (row) => {
    navigate(`/healthcardOverview/${row?.Brands}/${selectedProjectId}`);
  };
  return (
    <>
      <Table responsive striped bordered>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((row, rowIndex) => (
            <tr
              className="c-pointer"
              key={rowIndex}
              onClick={() => handleRowClick(row)}
            >
              {columns.map((column, colIndex) => (
                <td key={`${rowIndex}-${colIndex}`}>
                  {typeof row[column.accessor] === "number"
                    ? row[column.accessor].toFixed(2)
                    : row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TableComponent;
