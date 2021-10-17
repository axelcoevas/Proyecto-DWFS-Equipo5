import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';

const product = {
    id: 100000134,
    name: "Red bomber jacket XS",
    image: "https://m.media-amazon.com/images/I/81Uh6lgjPkL._AC_SX569_.jpg",
    price: 1250,
    quantity: 2,
    // props not on db model
    seller: "Seller name",
    seller_image: "https://pbs.twimg.com/profile_images/1086332409677660160/Lorn8QZ2.jpg",
    description: `I am convinced that you don't need to spend a fortune to look like a million. I like things simple. I have a fantastic relationship with money. I use it to buy my freedom. Fashion can be this mysterious thing that you can't explain. It's really easy to get colors right. It's really hard to get black - and neutrals - right. Black is certainly a color but it's also an illusion.

    I can design a collection in a day and I always do, cause I've always got a load of Italians on my back, moaning that it's late. Being one step ahead of a fashion trend is not so important to me. What matters is to always forge ahead. I think the idea of mixing luxury and mass-market fashion is very modern, very now - no one wears head-to-toe designer anymore. I try to contrast; life today is full of contrast... We have to change. My learning process is by eye alone; it's not at all scientific.

    `
};

const otherProducts = [product, product, product];

const Product = () => {
    // useEffect(() => {
    //     // API call


    //     // cleanup
    //     return () => {

    //     }
    // }, []);
    const [rating, setRating] = useState(0);

    return <Container sx={{ padding: "30px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginTop: "50px" }}>
            <Paper sx={{ padding: "20px" }}>
                <img style={{ width: "100%" }} src={product.image} lazy />
            </Paper>
            <Box sx={{ flex: 0.8 }}>
                <div style={{ fontSize: 32 }}>
                    <p className="product-name right">
                        {`${product.name} `}
                        <FavoriteBorderIcon />
                    </p>
                    <p className="price right">{product.price}</p>
                </div>
                <p style={{ color: "#847C7C", fontSize: "18px", whiteSpace: "pre-line" }}>{product.description}</p>

                <Box style={{ flex: 1, display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                    <Paper rounded elevation={2} style={{ position: "relative", width: 200, padding: "10px 20px" }}>
                        <Avatar style={{ position: "absolute", top: 10, right: 10 }} src={product.seller_image} />
                        <p style={{ fontSize: 20, fontWeight: "bold" }} >{product.seller}</p>
                        <Rating
                            name="simple-controlled"
                            value={rating}
                            onChange={(event, newValue) => {
                                setRating(newValue);
                            }}
                        />
                    </Paper>
                    <Button variant="contained">
                        Order now!
                    </Button>
                </Box>
            </Box>
        </Box>

        <Box>
            <p style={{ fontSize: 20 }} >Other products from seller</p>
            <Box style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                {otherProducts.map(({ image, seller_image, name, price }) => <ProductCard image={image} seller_image={seller_image} name={name} price={price} />)}

            </Box>
        </Box>
    </Container>;
};

export default Product;