import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Link } from "react-router-dom";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

function createData(customer, item, total) {
  return { customer, item, total };
}

const rows = [
  createData("fergcast8©gmail.com", "Red bomber jacket XS", 1250.00)
];

const Orders = () => {

  const [orderStatus, setOrderStatus] = useState("Confirm")
  const [showButtons, setShowButtons] = useState(true)
  const [dialogTitle, setDialogTitle] = useState("Confirm Order")
  const [dialogMessage, setDialogMessage] = useState("Do you want to confirm this order now?")
  const [open, setOpen] = useState(false);

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

const handleToast = () =>{
  const resolveWithSomeData = new Promise(resolve => setTimeout(() => resolve("OK"), 3500));
  toast.promise(
    resolveWithSomeData,
    {
      pending: {
        render(){
          return "Confirming your order"
        }
      },
      success: {

        render({_}){
          setOrderStatus("VIEW")
          setDialogTitle("Buyer's Telephone")
          setDialogMessage("📞 (477) 346-9483")
          setShowButtons(false)
         
          return `Order confirmed!`
        }
      },
      error: {
        render({data}){
          // When the promise reject, data will contains the error
         alert(data)
        }
      }
    }
)
};
  
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
                <TableCell align="right">Confirm Order</TableCell>
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
                  {/* <TableCell align="right">{row.protein}</TableCell> */}
                  <TableCell align="right">
                    <Button onClick={handleClickOpen}>{orderStatus}</Button>
                      <Dialog
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

                        { showButtons ? <DialogActions>
                          <Button onClick={handleClose}>Cancel</Button>
                          <Button onClick={handleToast} autoFocus>
                            Ok
                          </Button>
                          <ToastContainer/>
                        </DialogActions> : null }
                        
                    </Dialog>
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
