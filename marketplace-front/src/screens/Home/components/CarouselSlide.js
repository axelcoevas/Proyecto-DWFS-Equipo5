import React from 'react';
import { Card } from '@mui/material';



function CarouselSlide(props) {
    const { image, title } = props.content;
    return (
        <Card component="img" width="100%" src={image} alt={title}
            sx={{ maxHeight: '450px', borderRadius: '16px' }}
        />
    );
}

export default CarouselSlide;
