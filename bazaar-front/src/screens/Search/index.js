import { useLocation } from "react-router-dom";
import { useMemo, useEffect, useState } from "react";

import Container from "@mui/material/Container";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Pagination,
  Paper,
  Rating,
  Slider,
  Stack,
  Typography,
} from "@mui/material";

import ProductCard from "../Product/components/ProductCard";

// Custom query hook.
const useQuery = () => {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
};

const product = {
  id: 100000134,
  name: "Red bomber jacket XS",
  image: "https://m.media-amazon.com/images/I/81Uh6lgjPkL._AC_SX569_.jpg",
  price: 1250,
  quantity: 2,
  // props not on db model
  seller: "Seller name",
  seller_image:
    "https://pbs.twimg.com/profile_images/1086332409677660160/Lorn8QZ2.jpg",
  description: `I am convinced that you don't need to spend a fortune to look like a million. I like things simple. I have a fantastic relationship with money. I use it to buy my freedom. Fashion can be this mysterious thing that you can't explain. It's really easy to get colors right. It's really hard to get black - and neutrals - right. Black is certainly a color but it's also an illusion.

    I can design a collection in a day and I always do, cause I've always got a load of Italians on my back, moaning that it's late. Being one step ahead of a fashion trend is not so important to me. What matters is to always forge ahead. I think the idea of mixing luxury and mass-market fashion is very modern, very now - no one wears head-to-toe designer anymore. I try to contrast; life today is full of contrast... We have to change. My learning process is by eye alone; it's not at all scientific.

    `,
};

const otherProducts = [product, product, product, product, product];

const SearchResult = ({ product }) => {
  let { image, name, price, index } = product;
  return (
    <ProductCard
      image={image}
      // seller_image={seller_image}
      name={name}
      price={price}
      key={index}
    />
  );
};

const Search = () => {
  const query = useQuery();
  const [results, setResults] = useState(
    // []
    otherProducts
  );
  const [priceRange, setPriceRange] = useState([0, 10000]);

  useEffect(() => {
    // TODO: query products from db
    console.log("querying...");
    return () => {};
  }, [query]);

  const renderProducts = () => {
    if (results.length > 0)
      return results.map((product) => <SearchResult product={product} />);
    else return <p>No results found</p>;
  };

  return (
    <Container maxWidth="xl" sx={styles.container}>
      <Box sx={styles.searchParameters}>
        <h2>Search options</h2>

        <Divider />

        <Typography component="overline">Price range</Typography>
        <Slider
          getAriaLabel={() => "Price range"}
          value={priceRange}
          min={0}
          max={10000}
          step={100}
          onChange={(event, value) => setPriceRange(value)}
          valueLabelDisplay="auto"
          sx={{ margin: 2 }}
        />

        <Typography component="overline">Seller rating</Typography>

        <Stack>
          {[5, 4, 3, 2, 1].map((rating) => (
            <Rating name="read-only" value={rating} readOnly />
          ))}
        </Stack>
      </Box>
      <Divider orientation="vertical" />
      <Box sx={styles.searchContainer}>
        <Box sx={styles.searchResults}>
          <h1>Search results for "{query.get("q")}"</h1>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gridGap: 20,
              marginBottom: 20,
            }}
          >
            {renderProducts()}
          </Box>
          <Pagination count={10} size="large" sx={{ alignSelf: "center" }} />
        </Box>
      </Box>
    </Container>
  );
};

const styles = {
  container: {
    display: "flex",
    // justifyContent: "center",
    flexDirection: "row",
    padding: 1,
  },
  searchParameters: {
    flexGrow: 0.3,
    padding: 5,
    margin: 2,
    borderRight: "1px solid rgba(0, 0, 0, 0.12);",
    alignSelf: "flex-start",
  },
  searchContainer: { flexGrow: 0.7, padding: 3 },
  searchResults: {
    display: "flex",
    flexDirection: "column",
  },
};

export default Search;
