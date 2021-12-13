import React from "react";
import Box from "@mui/material/Box";

import Carousel from "./components/Carousel";
import ProductGrid from "./components/ProductGrid";

const Home = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Box
        component="section"
        sx={{
          displaytextAlign: "center",
          padding: "2em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Carousel />
      </Box>
      <ProductGrid />
    </div>
  );
};

export default Home;
