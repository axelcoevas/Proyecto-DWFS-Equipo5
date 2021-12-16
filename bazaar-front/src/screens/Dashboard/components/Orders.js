import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Link } from "react-router-dom";

function createData(customer, item, total, orderId) {
  return { customer, item, total, orderId };
}

const rows = [
  createData("Antonio Labra", "Red bomber", 1299.0, 100001),
  createData("David Dorantes", "Silverware", 239, 100002),
  createData("Diego Melo", "Xbox 360", 299, 100003),
  createData("Rogelio Magaña", "Used Sewing Kit", 299, 100004),
  createData("Axel Cuevas", "Macbook Air", 299, 100005),
];

const Orders = () => {
  return (
    <div>
      <h1>Orders</h1>
      <div className="center" style={{ display: "flex" }}>
        <TableContainer component={Paper} sx={{ flex: 1, width: "100%" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Customer</TableCell>
                <TableCell align="right">Item</TableCell>
                <TableCell align="right">Total</TableCell>
                <TableCell align="right">Order Id</TableCell>
                <TableCell align="right">Go to order</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.customer}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.customer}
                  </TableCell>
                  <TableCell align="right">{row.item}</TableCell>
                  <TableCell align="right">{row.total}</TableCell>
                  <TableCell align="right">{row.orderId}</TableCell>
                  {/* <TableCell align="right">{row.protein}</TableCell> */}
                  <TableCell align="right">
                    <Link to="#">Link</Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Orders;
