import React from 'react';
import Logo from './components/logo';
import LoginForm from './components/LoginForm';
import { makeStyles, StylesContext } from '@mui/styles'
import { Container, Grid } from "@mui/material"
import BgImage from '../../assets/bg1.jpg'

const Login = () => {

     const style = makeStyles(theme => ({

        login: {
            height: 800,
            backgroundImage: `url(${BgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        },
    }))


    const classes = style()

    return (
        <>
            <Grid maxWidth={"xlg"} className={classes.login}
                container
                spacing={0}
                alignItems="center"
                justify="center"
                style={StylesContext.login} >
                    <Container>
                        <Logo />
                        <LoginForm />
                    </Container>
            </Grid>        
        </>
    )
}

export default Login;