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
            <TableCell align="right">Select</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Postcode</TableCell>
            <TableCell align="right">Property type</TableCell>
            <TableCell align="right">Number of rooms</TableCell>
            <TableCell align="right">Floor area (m^2)</TableCell>
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
              <TableCell component="th" scope="row">
                {row.address}
              </TableCell>
              <TableCell align="right">{row.postCode}</TableCell>
              <TableCell align="right">{row.propertyType}</TableCell>
              <TableCell align="right">{row.noOfRooms}</TableCell>
              <TableCell align="right">{row.floorArea}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
