import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';

import "./index.css";
import 'react-toastify/dist/ReactToastify.css';

const product = {
  id: 100000134,
  name: "Red bomber jacket XS",
  image: "https://m.media-amazon.com/images/I/81Uh6lgjPkL._AC_SX569_.jpg",
  price: 1250,
  quantity: 2,
  // props not on db model
  seller: "Antonio Labra",
  seller_image:
    "https://pbs.twimg.com/profile_images/1086332409677660160/Lorn8QZ2.jpg",
  description: `100% Polyester
  Imported
  Zipper closure
  slim fit wear, soft, comfortable and breathable.
  Fashion and Stylish: Rib collar, cuff and hem, Zipper Closure, Long Sleeve.
  Suitable for: Casual, Outdoor, Daily, School, Working, Camping, Sports, Athletics and so on.
  Season: Spring & Autumn
  Machine Washing Available`,
};

const productA= {
  id: 100000135,
  name: "Gildan Mens Ultra Cotton",
  image: "https://m.media-amazon.com/images/I/715bY3uEYgL._AC_UX679_.jpg",
  price: 299.99,
  quantity: 1,
  // props not on db model
  seller: "Antonio Labra",
  seller_image:
    "https://pbs.twimg.com/profile_images/1086332409677660160/Lorn8QZ2.jpg",
  description: `Solids: 100% Cotton; Ash Grey: 99% Cotton, 1%`,
};

const productB = {
  id: 100000136,
  name: "Gioberti Mens Cotton",
  image: "https://m.media-amazon.com/images/I/81C6s5TDjqL._AC_UX679_.jpg",
  price: 1250,
  quantity: 2,
  // props not on db model
  seller: "Antonio Labra",
  seller_image:
    "https://pbs.twimg.com/profile_images/1086332409677660160/Lorn8QZ2.jpg",
  description: `Solid Cotton Fabric with Soft Flannel Lining`,
};

const productC = {
  id: 100000137,
  name: "Pack 2 Christmas Tabletop Tree",
  image: "https://m.media-amazon.com/images/I/81M-E0KFiJL._AC_SL1500_.jpg",
  price: 259.5,
  quantity: 1,
  // props not on db model
  seller: "Antonio Labra",
  seller_image:
    "https://pbs.twimg.com/profile_images/1086332409677660160/Lorn8QZ2.jpg",
  description: `ECO-FRIENDLY & REALISTIC - Made of PVC`,
};

const otherProducts = [productA, productB, productC];

const Product = () => {
  // useEffect(() => {
  //     // API call

  //     // cleanup
  //     return () => {

  //     }
  // }, []);
  const [rating, setRating] = useState(0);
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
            return "Processing your order"
          }
        },
        success: {
          render({_}){
            handleClose()
            return `Order saved!`
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
    <Container sx={{ padding: "30px" }}>
      <Box
        // sx={{
        //   display: "flex",
        //   justifyContent: "space-between",
        //   alignItems: "start",
        //   marginTop: "50px",
        // }}
        className="product-container"
      >
        <Paper sx={{ padding: "20px" }}>
          <img style={{ width: "100%" }} src={product.image} lazy="true" />
        </Paper>
        <Box sx={{ flex: 0.8 }}>
          <div style={{ fontSize: 32 }}>
            <p className="product-name right">
              {`${product.name} `}
              <FavoriteBorderIcon />
            </p>
            <p className="price right">{product.price}</p>
          </div>
          <p
            style={{
              color: "#847C7C",
              fontSize: "18px",
              whiteSpace: "pre-line",
            }}
          >
            {product.description}
          </p>

          <Box
            style={{
              //   flex: 1,
              display: "flex",
              justifyContent: "space-evenly",
              //   justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Paper
              rounded="true"
              className="rating"
              elevation={2}
              style={{
                position: "relative",
                padding: "10px 20px",
              }}
            >
              <Avatar
                style={{ position: "absolute", top: 10, right: 10 }}
                src={product.seller_image}
              />
              <p style={{ fontSize: 20, fontWeight: "bold" }}>
                {product.seller}
              </p>
              <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
              />
            </Paper>
            <div>
            <Button variant="contained" sx={{ padding: 2 }} onClick={handleClickOpen}>
              Order now!
            </Button>
            <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirm Order"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to order "{product.name}" now?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleToast} autoFocus>
            Ok
          </Button>
          <ToastContainer/>
        </DialogActions>
      </Dialog>
            </div>
          </Box>
        </Box>
      </Box>

      <div className="divider" />

      <Box>
        <p style={{ fontSize: 20 }}>Other products from seller</p>

        <Box
          sx={{
            padding: "2em",
            paddingBottom: "2em",
            display: "grid",
            gridGap: "20px",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            textDecoration: "none",
          }}
        >
          {otherProducts.map(({ image, seller_image, name, price}, index) => (
            <ProductCard
              image={image}
              seller_image={seller_image}
              name={name}
              price={price}
              key={index}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Product;
