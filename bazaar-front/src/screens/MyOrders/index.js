import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";

import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import ReviewModal from "./components/ReviewModal";

function createData(item, total, seller, contact, link) {
  return { item, total, seller, contact, link };
}

const rows = [
  createData(
    "Red bomber jacket",
    1299,
    "Fernando Castañeda",
    "fergcast8@gmail.com",
    "#"
  ),
];

const MyOrders = () => {
  return (
    <div style={{ padding: 20 }}>
      <h1>My Orders</h1>
      <h2>Pending</h2>
      <TableContainer component={Paper} sx={{ flex: 1, width: "100%" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="right">Seller</TableCell>
              <TableCell align="right">Contact</TableCell>
              <TableCell align="right">Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.item}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.item}
                </TableCell>
                <TableCell align="right">{`$ ${row.total}`}</TableCell>
                <TableCell align="right">{row.seller}</TableCell>
                <TableCell align="right">{row.contact}</TableCell>
                <TableCell align="right">
                  <Link to="#">Ir</Link>
                  {/* <Button onClick={handleClickOpen}>{orderStatus}</Button> */}
                  {/* <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      {dialogTitle}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        {dialogMessage}
                      </DialogContentText>
                    </DialogContent>

                    {showButtons ? (
                      <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleToast} autoFocus>
                          Ok
                        </Button>
                        <ToastContainer />
                      </DialogActions>
                    ) : null}
                  </Dialog> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Divider />

      <h2>Delivered</h2>
      <TableContainer component={Paper} sx={{ flex: 1, width: "100%" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="right">Seller</TableCell>
              <TableCell align="right">Contact</TableCell>
              <TableCell align="right">Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.item}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.item}
                </TableCell>
                <TableCell align="right">{`$ ${row.total}`}</TableCell>
                <TableCell align="right">{row.seller}</TableCell>
                <TableCell align="right">{row.contact}</TableCell>
                <TableCell align="right">
                  {/* <Link to="#">Ir</Link> */}
                  {/* <Button>Rate</Button> */}
                  <ReviewModal />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MyOrders;
