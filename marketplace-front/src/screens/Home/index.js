import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Carousel from './components/Carousel';
import ProductGrid from './components/ProductGrid';

const Home = () => {

    return (
<<<<<<< HEAD
        <div className="HomeContaner">
=======
        <Container sx={{ backgroundColor: '#E5E5E5', margin: 0 }} maxWidth="xlg">
>>>>>>> a97f3295a47695d4c4307b5e5f95566472f33b11
            <Box
                component="section"
                sx={{
                    displaytextAlign: 'center',
                    padding: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Carousel />
            </Box>
            <ProductGrid />
        </div>
    );
};

export default Home;
