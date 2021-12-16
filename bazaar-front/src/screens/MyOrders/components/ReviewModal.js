import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Rating from "@mui/material/Rating";
// import IconButton from "@material-ui/core/IconButton";
// import CloseIcon from "@material-ui/icons/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const ratingContainer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "0.5em",
  margin: "1em",
};

export default function ReviewModal() {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [productRating, setProductRating] = useState(3);
  const [deliveryRating, setDeliveryRating] = useState(3);
  const [experienceRating, setExperienceRating] = useState(3);

  return (
    <div>
      <Button onClick={handleOpen}>Rate</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h4" component="h2">
              How did we do?
            </Typography>
            {/* <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}
            <Typography sx={{ margin: 2 }}>
              Please let us know how we can improve your experience!
            </Typography>

            <Box style={ratingContainer}>
              <Typography variant="h5">
                How would you rate your product?
              </Typography>
              <Rating
                name="simple-controlled"
                value={productRating}
                onChange={(event, newValue) => setProductRating(newValue)}
                size="large"
              />
            </Box>

            <Box style={ratingContainer}>
              <Typography variant="h5">
                How would you rate your product delivery?
              </Typography>
              <Rating
                name="simple-controlled"
                value={deliveryRating}
                onChange={(event, newValue) => setDeliveryRating(newValue)}
                size="large"
              />
            </Box>

            <Box style={ratingContainer}>
              <Typography variant="h5">
                How would you rate your overall experience?
              </Typography>
              <Rating
                name="simple-controlled"
                value={experienceRating}
                onChange={(event, newValue) => setExperienceRating(newValue)}
                size="large"
              />
            </Box>

            <Button onClick={handleClose} variant="contained">
              Submit
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
