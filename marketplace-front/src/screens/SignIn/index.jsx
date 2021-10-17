import React from 'react';
import SwitchCustom from './components/Switch';
import Logo from '../Login/components/logo';
import ProfileForm from '../Profile/components/ProfileForm';
import { makeStyles, StylesContext } from '@mui/styles';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { margin } from '@mui/system';


const SignIn = () => {

     const style = makeStyles(theme => ({
        signin:{
            backgroundColor: "#F7FAFB",
        }

    }))


    const classes = style()

    return (
        <>
            <Container className={classes.signin} maxWidth="xlg" >
                <Grid container direction="column">
                    <Grid item>
                        <Grid container columns={12} direction="row">
                            <Grid item xs={10}></Grid>
                            <Grid item xs={2} marginTop={3} marginBottom={2}><SwitchCustom/></Grid>
                        </Grid>
                    </Grid>
                    <Grid item><Logo /></Grid>
                    <Grid item><ProfileForm /></Grid>
                </Grid>
                
            </Container>
        </>
    )
}

export default SignIn;