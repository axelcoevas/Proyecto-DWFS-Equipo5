import React, { useState } from 'react';
import Button from '@mui/material/Button';
// import Slide from '@mui/material/Slide';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CarouselSlide from './CarouselSlide';

function Carousel() {
	const SLIDES_ITEMS = [
		{
			title: 'Imagen 1',
			image: 'https://st3.depositphotos.com/15582768/18733/v/1600/depositphotos_187339500-stock-illustration-flat-colorful-design-concept-marketplace.jpg',
		},
		{
			title: 'Imagen 2',
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT5s2MB9UwVF2URaOoCVD5wvM8r7HrrZqC1Q&usqp=CAU',
		},
		{
			title: 'Imagen 3',
			image: 'https://www.7apa.com/wp-content/uploads/2017/08/Web-Banner-MarketPlace-700x360px.jpg',
		},
		{
			title: 'Imagen 4',
			image: 'https://67degreescdn.co.uk/42/6/15765255325df7dedc05ada_blog-banner.jpg?width=479&height=359&crop=auto',
		},
		{
			title: 'Imagen 5',
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCxqBwhhRX9m4at5jngj3ILQzrhwKoyET30w&usqp=CAU',
		},
	];

	return (
		<>
			<Button
				sx={{
					margin: '0 -40px',
					width: '6%',
					height: '20%',
					background: ' #3F3F3F',
					color: '#FFF',
					borderRadius: '8px',
					transform: 'matrix(1, -0.01, -0.01, -1, 0, 0)',
					':hover': {
						color: '#3F3F3F',
						background: '#FFF',
					},
				}}>
				<ArrowBackIosNewIcon />
			</Button>

			<CarouselSlide content={SLIDES_ITEMS[3]} />

			<Button
				sx={{
					margin: '0 -40px',
					width: '6%',
					height: '20%',
					background: ' #3F3F3F',
					color: '#FFF',
					borderRadius: '8px',
					transform: 'matrix(1, -0.01, -0.01, -1, 0, 0)',
					':hover': {
						color: '#3F3F3F',
						background: '#FFF',
					},
				}}>
				<ArrowForwardIosIcon />
			</Button>
		</>
	);
}

export default Carousel;
