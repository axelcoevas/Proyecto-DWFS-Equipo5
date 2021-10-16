import React from 'react';
// import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Carousel from './components/Carousel';

const Home = () => {
	

	return (
		<Container sx={{backgroundColor: '#E5E5E5', margin: 0}} maxWidth="xl">
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
			{/* <ItemsList/> */}
		</Container>
	);
};

export default Home;
