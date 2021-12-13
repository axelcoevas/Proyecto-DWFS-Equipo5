import React from 'react';
import { Paper, Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';

const ProductPreview = ({ product }) => {
    const classes = makeStyles(theme => ({
        ProductPreviewContainer: {
            margin: '1em 1.5em',
            width: 'auto',
            borderRadius: '0.5em',
            overflow: 'hidden',

            position: 'relative',
        },
        ProductName: {
            fontSize: '1.1rem',
            textAlign: 'right',
            color: 'white',
            fontWeight: 'bold',
            margin: '0.5em',
        },
        ProductPrice: {
            fontSize: '1.5rem',
            color: 'white',
            textAlign: 'right',
            margin: '0.5em',
        },
        ProductImage: {
            maxHeight: '23vh'
        },
        ImageContainer: {
            // padding: '1em',
            // overflow: 'hidden'
        },
        DescriptionContainer: {
            justifyContent: 'space-between',
            background: 'linear-gradient(to top, rgba(0, 0, 0, 1), transparent)',
            padding: '0.75em 1em 0px 1em',

            position: 'absolute',
            bottom: 0, left:0, right: 0
        }
    }))();

    return (
        <Paper className={classes.ProductPreviewContainer}>
            <div className={`center ${classes.ImageContainer}`}>
                <img className={classes.ProductImage} src={product.image} alt={product.name} />
                <div className={`center ${classes.DescriptionContainer}`}>
                    <Avatar src={product.seller_image}/>
                    <div>
                        <p className={`${classes.ProductName}`}>{product.name}</p>
                        <p className={`price ${classes.ProductPrice}`}>{product.price}</p>
                    </div>
                </div>
            </div>
        </Paper>
    );
};

export default ProductPreview;