import React from 'react';
import { Paper, Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';

const ProductPreview = ({ product }) => {
    const classes = makeStyles(theme => ({
        ProductPreviewContainer: {
            margin: '1em 1.5em',
            width: 'auto'
        },
        ProductName: {
            fontSize: '1rem',
            textAlign: 'right'
        },
        ProductPrice: {
            fontSize: '1.25rem',
            textAlign: 'right'
        },
        ProductImage: {
            maxHeight: '14vh'
        },
        ImageContainer: {
            padding: '1em'
        },
        DescriptionContainer: {
            justifyContent: 'space-between',
            backgroundColor: '#ffc1bd',
            padding: '0 1em'
        }
    }))();

    return (
        <Paper className={classes.ProductPreviewContainer}>
            <div className={`center ${classes.ImageContainer}`}>
                <img className={classes.ProductImage} src={product.image} alt={product.name} />
            </div>

            <div className={`center ${classes.DescriptionContainer}`}>
                <Avatar src={product.seller_image} />
                <div>
                    <p className={`product-name ${classes.ProductName}`}>{product.name}</p>
                    <p className={`price ${classes.ProductPrice}`}>{product.price}</p>
                </div>
            </div>

        </Paper>
    );
};

export default ProductPreview;