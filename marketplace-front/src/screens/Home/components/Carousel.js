import React, { useState } from 'react';
import Slide from '@mui/material/Slide';
import CarouselSlide from './CarouselSlide';
import ArrowButton from './ArrowButton';

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

function Carousel() {
    // Navigation among elements
	const [index, setIndex] = useState(0);
	const content = SLIDES_ITEMS[index];
	const numSlides = SLIDES_ITEMS.length;

	const [slideIn, setSlideIn] = useState(true);
	const [slideDirection, setSlideDirection] = useState('down');

	const onArrowClick = direction => {
		const increment = direction === 'left' ? -1 : 1;
		const newIndex = (index + increment + numSlides) % numSlides;

		const oppDirection = direction === 'left' ? 'right' : 'left';
		setSlideDirection(direction);
		setSlideIn(false);

		setTimeout(() => {
			setSlideDirection(oppDirection);
			setIndex(newIndex);
			setSlideIn(true);
		}, 500);
	};

	return (
		<>
			<ArrowButton
				direction="left"
				onArrowClick={() => onArrowClick('left')}
			/>
			<Slide in={slideIn} direction={slideDirection}>
				<div style={{ width: '100%' }}>
					<CarouselSlide content={content} />
				</div>
			</Slide>
			<ArrowButton
				direction="right"
				onArrowClick={() => onArrowClick('right')}
			/>
		</>
	);
}

export default Carousel;
