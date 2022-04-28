import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useGlobalContext } from "../context/appContext";

export default function BasicTable() {
  const { items, setCurrentItem } = useGlobalContext();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 250 }} aria-label="simple table">
        <TableBody>
          {items.length
            ? items.map((item) => (
                <TableRow
                  key={item.meal[0] + Math.trunc(Math.random() * 100000)}
                  id={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.meal}: <i> {item.calories} Calories</i>
                  </TableCell>
                  <TableCell component="th" align="right">
                    <i
                      onClick={() => setCurrentItem(item.id)}
                      className="fa fa-pencil"
                      aria-hidden="true"
                    ></i>
                  </TableCell>
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
