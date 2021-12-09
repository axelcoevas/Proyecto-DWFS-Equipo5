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
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          // alt="green iguana"
        />
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.seller}
          </Typography>
          <Typography
            sx={{ alignSelf: "flex-end" }}
            // variant="body2"
            // color="text.secondary"
          >
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
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
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        // justifyContent: "center",
        flexDirection: "row",
        padding: 1,
      }}
    >
      <Box sx={{ flexGrow: 0.3, padding: 2 }}>
        <h2>Search options</h2>

        <Divider />

        <Typography component="legend">Price range</Typography>
        <Slider
          getAriaLabel={() => "Price range"}
          value={priceRange}
          min={0}
          max={10000}
          step={100}
          onChange={(event, value) => setPriceRange(value)}
          valueLabelDisplay="auto"
        />

        <Typography component="legend">Seller rating</Typography>

        <Stack>
          {[5, 4, 3, 2, 1].map((rating) => (
            <Rating name="read-only" value={rating} readOnly />
          ))}
        </Stack>
      </Box>
      <Divider orientation="vertical" />
      <Box sx={{ flexGrow: 0.7, padding: 3 }}>
        <Box>
          <h1>Search results for "{query.get("q")}"</h1>
          <Box
            sx={{
              display: "grid",
              width: "100%",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gridGap: 20,
              marginBottom: 20,
            }}
          >
            {renderProducts()}
          </Box>
          <Pagination count={10} />
        </Box>
      </Box>
    </Container>
  );
};

export default Search;
