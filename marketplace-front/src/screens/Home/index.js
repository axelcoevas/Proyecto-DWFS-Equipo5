import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Carousel from './components/Carousel';
import ProductGrid from './components/ProductGrid';

const Home = () => {

    return (
        <Container sx={{ backgroundColor: '#E5E5E5', margin: 0 }} maxWidth="xlg">
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
        </Container>
    );
};

export default Home;
