import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { TextField } from "@mui/material";
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

  const [experienceRating, setExperienceRating] = useState(3);
  const [experienceSummary, setExperienceSummary] = useState("");

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
            Rate your purchase
            </Typography>
            {/* <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}
            <Typography sx={{ margin: 2 }}>
            Your experience is important for us!
            </Typography>

            <Box style={ratingContainer}>
              <Rating
                name="simple-controlled"
                value={experienceRating}
                onChange={(event, newValue) => setExperienceRating(newValue)}
                size="large"
              />
              <TextField
                name="simple-textfield"
                placeholder="Type a summary (optional)"
                onChange={(event, newValue) => setExperienceSummary(newValue)}/>
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
