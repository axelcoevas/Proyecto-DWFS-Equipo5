import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import { FacebookRounded, Instagram, Twitter } from "@mui/icons-material";

const iconStyle = {
  fontSize: "3rem",
  color: "#555",
  margin: 2,
};

const Footer = () => {
  return (
    <footer>
      <Box
        className="center"
        flexDirection="column"
        style={{ backgroundColor: "#f3f3f3", padding: "1rem" }}
      >
        <Box>
          {[
            "Home",
            "About",
            "Contact",
            "Privacy policy",
            "Terms and conditions",
          ].map((text, i) => (
            <p style={{ fontSize: 18, textAlign: "center" }}>{text}</p>
          ))}
        </Box>

        <Box
          style={{
            borderTop: "2px solid lightgray",
            borderBottom: "2px solid lightgray",
          }}
        >
          <FacebookRounded sx={iconStyle} />
          <Instagram sx={iconStyle} />
          <Twitter sx={iconStyle} />
        </Box>

        <p style={{ fontFamily: "Tahoma", fontSize: "1.5rem" }}>
          Bazaar! &reg; {new Date().getFullYear()}
        </p>
      </Box>

      {/* <Box
        px={{ xs: 1, sm: 2 }}
        py={{ xs: 1, sm: 5 }}
        sx={{ backgroundColor: "#3F3F3F", color: "#EBEBEB" }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={3}>
              <Box borderBottom={1}>
                <Typography variant="h5" align="center">
                  Important Links
                </Typography>
              </Box>
              <Typography variant="h6" sx={{ marginTop: 1 }}>
                <Box>
                  <Link href="/" color="inherit" underline="none">
                    Home
                  </Link>
                </Box>
                <Box>
                  <Link href="/privacy" color="inherit" underline="none">
                    Privacy
                  </Link>
                </Box>
                <Box>
                  <Link href="/terms" color="inherit" underline="none">
                    Terms and conditions
                  </Link>
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box textAlign="center">
                <Typography variant="h5">
                  MKT PLACE &reg; {new Date().getFullYear()}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box borderBottom={1}>
                <Typography variant="h5" align="center">
                  Others
                </Typography>
              </Box>
              <Typography variant="h6" sx={{ marginTop: 1 }}>
                <Box>
                  <Link href="/contact" color="inherit" underline="none">
                    Contact
                  </Link>
                </Box>
                <Box>
                  <Link href="/faqs" color="inherit" underline="none">
                    FAQs
                  </Link>
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box> */}
      <Container
        maxWidth="xlg"
        sx={{ backgroundColor: "#000", color: "#EBEBEB", padding: 3 }}
      >
        <Typography variant="h6" align="center">
          {/* Made with ❤ by Team 5.     A elegir*/}
          Made with &lt;3 by Team 5.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
