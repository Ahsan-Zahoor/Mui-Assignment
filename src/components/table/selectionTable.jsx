import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { setSelected } from "../store/propertyDataSlice";

export default function SelectionTable({ rows }) {
  const dispatch = useDispatch();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const selected = useSelector((state) => state.property.selectedOptions);

  const handleClick = (id) => {
    const selectedIndex = selectedOptions.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedOptions, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedOptions.slice(1));
    } else if (selectedIndex === selectedOptions.length - 1) {
      newSelected = newSelected.concat(selectedOptions.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedOptions.slice(0, selectedIndex),
        selectedOptions.slice(selectedIndex + 1)
      );
    }

    dispatch(setSelected(newSelected));
    setSelectedOptions(newSelected);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Select</TableCell>
            <TableCell align="center">Address</TableCell>
            <TableCell align="center">Postcode</TableCell>
            <TableCell align="center">Property type</TableCell>
            <TableCell align="center">Number of rooms</TableCell>
            <TableCell align="center">Floor area (m^2)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              hover
              onClick={() => handleClick(row.id)}
              role="checkbox"
              tabIndex={-1}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                cursor: "pointer",
              }}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  checked={selected.map((row) => row.id).includes(row.id)}
                />
              </TableCell>
              <TableCell align="center">{row.address}</TableCell>
              <TableCell align="center">{row.postCode}</TableCell>
              <TableCell align="center">{row.propertyType}</TableCell>
              <TableCell align="center">{row.noOfRooms}</TableCell>
              <TableCell align="center">{row.floorArea}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
