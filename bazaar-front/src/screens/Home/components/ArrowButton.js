import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function ArrowButton(props) {
	const { direction, onArrowClick } = props;
	return (
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
			}}
			onClick={onArrowClick}>
			{direction === 'left' ? (
				<ArrowBackIosNewIcon />
			) : (
				<ArrowForwardIosIcon />
			)}
		</Button>
	);
}
