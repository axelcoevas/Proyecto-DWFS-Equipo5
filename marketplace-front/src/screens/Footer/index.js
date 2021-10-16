import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Footer = () => {
	return (
		<footer>
			<Box
				px={{ xs: 3, sm: 10 }}
				py={{ xs: 5, sm: 10 }}
				bgcolor="text.secondary"
				color="white">
				<Container maxWidth="lg">
					<Grid container spacing={5}>
						<Grid item xs={12} sm={4}>
							<Box borderBottom={1}>
								<Typography variant="h5">About</Typography>
							</Box>
							<Box>
								<Link href="/" color="inherit">
									Repository
								</Link>
							</Box>
						</Grid>
						<Grid item xs={12} sm={4}>
							<Box borderBottom={1}>
								<Typography variant="h5">Account</Typography>
							</Box>
							<Box>
								<Link href="/" color="inherit">
									Sign In
								</Link>
							</Box>
							<Box>
								<Link href="/" color="inherit">
									Sign Up
								</Link>
							</Box>
						</Grid>
						<Grid item xs={12} sm={4}>
							<Box textAlign="center">
								<Typography variant="body1">
									MKT PLACE &reg; {new Date().getFullYear()}
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</footer>
	);
};

export default Footer;
