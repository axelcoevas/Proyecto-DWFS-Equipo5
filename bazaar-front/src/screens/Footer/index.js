import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Footer = () => {
	return (
		<footer>
			<Box
				px={{ xs: 1, sm: 2 }}
				py={{ xs: 1, sm: 5 }}
				sx={{backgroundColor: '#3F3F3F', color: '#EBEBEB'}}>
				<Container maxWidth="lg">
					<Grid container spacing={5}>
						<Grid item xs={12} sm={3}>
							<Box borderBottom={1}>
								<Typography variant="h5" align="center">
									Important Links
								</Typography>
							</Box>
							<Typography variant="h6" sx={{marginTop:1}}>
								<Box>
									<Link
										href="/"
										color="inherit"
										underline="none">
										Home
									</Link>
								</Box>
								<Box>
									<Link
										href="/privacy"
										color="inherit"
										underline="none">
										Privacy
									</Link>
								</Box>
								<Box>
									<Link
										href="/terms"
										color="inherit"
										underline="none">
										Terms and conditions
									</Link>
								</Box>
							</Typography>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Box textAlign="center">
								<Typography variant="h5">
									MKT PLACE &reg; {new Date().getFullYear()}
								</Typography>
							</Box>
						</Grid>
						<Grid item xs={12} sm={3}>
							<Box borderBottom={1}>
								<Typography variant="h5" align="center">Others</Typography>
							</Box>
							<Typography variant="h6" sx={{marginTop:1}}>
								<Box>
									<Link
										href="/contact"
										color="inherit"
										underline="none">
										Contact
									</Link>
								</Box>
								<Box>
									<Link
										href="/faqs"
										color="inherit"
										underline="none">
										FAQs
									</Link>
								</Box>
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</Box>
            <Container maxWidth="xlg" sx={{backgroundColor: '#000', color: '#EBEBEB', padding: 3}}>
                <Typography variant="h6" align="center">
                {/* Made with ❤ by Team 5.     A elegir*/}
                Made with &lt;3 by Team 5.
                </Typography>
            </Container>
		</footer>
	);
};

export default Footer;
