import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";

export default function BasicTable() {
  const selected = useSelector((state) => state.property.selectedOptions);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Address</TableCell>
            <TableCell align="center">Postcode</TableCell>
            <TableCell align="center">Property type</TableCell>
            <TableCell align="center">Number of rooms</TableCell>
            <TableCell align="center">Floor area (m^2)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {selected.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
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
