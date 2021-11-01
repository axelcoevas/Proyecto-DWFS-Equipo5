import React, { useState } from 'react';
import Slide from '@mui/material/Slide';
import CarouselSlide from './CarouselSlide';
import ArrowButton from './ArrowButton';

const SLIDES_ITEMS = [
    {
        title: 'Imagen 1',
        image: 'https://media.istockphoto.com/photos/shopping-online-concept-parcel-or-paper-cartons-with-a-shopping-cart-picture-id1249219777?b=1&k=20&m=1249219777&s=170667a&w=0&h=0dXNU-fjD9aOMmrvlppQhJ9gOqnW9dslKFdYLQN9rnk=',
    },
    {
        title: 'Imagen 2',
        image: 'https://media.istockphoto.com/photos/flying-shopping-cart-with-shopping-bags-on-a-pink-background-picture-id1292443598?b=1&k=20&m=1292443598&s=170667a&w=0&h=_MM45Mxfq5PXtEEYpuMbMunr3u9YRQK8jgxQTo8UhKY=',
    },
    {
        title: 'Imagen 3',
        image: 'https://media.istockphoto.com/photos/mature-man-running-online-store-picture-id1281476617?b=1&k=20&m=1281476617&s=170667a&w=0&h=gzcJ_9EIpmpX48hHsh-N2sB9TS_UMrUclhKejsu69uo=',
    },
    {
        title: 'Imagen 4',
        image: 'https://media.istockphoto.com/photos/its-beautiful-product-picture-id1256128117?b=1&k=20&m=1256128117&s=170667a&w=0&h=GhQu3cRN-yE0CsWH4EIuI1_V6pKRkvvwAK6LQg2rbnc=',
    },
    {
        title: 'Imagen 5',
        image: 'https://media.istockphoto.com/photos/retail-shop-clerk-taking-a-mobile-credit-card-payment-on-a-digital-picture-id1145785115?b=1&k=20&m=1145785115&s=170667a&w=0&h=F0xiy3Ee2TD3OFHQtcPLOZaTAE_yRBXlcor5iZJ3goo=',
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
