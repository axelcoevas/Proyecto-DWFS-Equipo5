import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import ProductPreview from './ProductPreview';
import { Box } from '@mui/system';
import Link from '@mui/material/Link';

const product = {
    id: 100000134,
    name: "Red bomber jacket XS",
    image: "https://m.media-amazon.com/images/I/81Uh6lgjPkL._AC_SX569_.jpg",
    price: 1250,
    quantity: 2,
    // props not on db model
    seller: "Seller name",
    seller_image: "https://pbs.twimg.com/profile_images/1086332409677660160/Lorn8QZ2.jpg",
};

const products = [product, product, product, product, product, product, product, product];

const ProductGrid = () => {
    const classes = makeStyles(theme => ({
        ProductGrid: {
            padding: '1em',
            paddingBottom: '2em',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            textDecoration: 'none'
        },
        ProductPreview: {
            width: 'auto',
        }
    }))();

    return (
        <div className={classes.ProductGrid}>
            {products.map((product) => (
                <Link href='/product'>
                    <ProductPreview className={classes.ProductPreview} product={product} />
                </Link>
            ))}
        </div>
    );
};

export default ProductGrid;