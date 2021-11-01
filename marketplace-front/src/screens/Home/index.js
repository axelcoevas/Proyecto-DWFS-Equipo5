import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Carousel from './components/Carousel';
import ProductGrid from './components/ProductGrid';

const Home = () => {

    return (
        <div >
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
