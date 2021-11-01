import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

import ProductGrid from '../Home/components/ProductGrid';


const NotFound = () => {

    return <Container fixed sx={{ padding: '30px' }}>
        <Grid container spacing={4} >
            <Grid item xs={12} md={6}>
                <Box component="section" sx={{
                    minHeight: '20vh'
                }}>
                    <Typography variant="h4" align="justify" gutterBottom >
                        Sorry, the content you want to access was lost.
                    </Typography>
                    <Button variant="contained">
                        <Link
                            href="/"
                            color="inherit"
                            underline="none">
                            Back to HomePage
                        </Link>
                    </Button>
                </Box>
            </Grid>
            <Grid item xs={12} md={6} >
                <Card component="img"
                    src="https://media.istockphoto.com/photos/error-404-3drendering-page-concept-picture-id1302333331?b=1&k=20&m=1302333331&s=170667a&w=0&h=t-4iFoxu6BLO002CSbv_F_S2b02xAiI5O1sYPjE92T8=" alt="404 not found"
                    sx={{ width: '100%' }}
                />
            </Grid>
            <Grid item xs>
                <Box>
                    <Typography variant="h6">Awesome products of interest</Typography>
                    <ProductGrid />
                </Box>
            </Grid>
        </Grid>
    </Container>
}

export default NotFound;