import React from "react";
import { autocompleteClasses, Button, Grid, TextField } from "@mui/material";
// import Link from '@mui/material/Link';
import {Link} from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const LoginForm = () => {

    const style = makeStyles(theme => ({
        form: {
            padding:"4em"
        },

        button:{
            backgroundColor: '#3F3F3F',
            alignSelf: 'center',
            justifyContent: 'center',
        },

        textField:{
            backgroundColor: "#F7FAFB",
            border: 1,
            borderRadius: 5,
            borderColor: 'rgba(63, 63, 63, 0.7)',
        },

        link:{
            color: "#3F3F3F",
            backgroundColor: 'rgb(229, 229, 229, 0.5)',
            textDecoration: 'rgba(63, 63, 63, 0.7)',
            borderRadius: 2
        }

    }))

    const classes = style()

    function handleSubmit(e) {
        e.preventDefault()
    }


    return (
       <>
            <form onSubmit={handleSubmit} className={classes.form}>

            <Grid   container
                    direction="column"
                    alignItems="stretch"
                    rowGap={4}>
                    <TextField id="username-textfield" className={classes.textField} label="Username" variant="outlined" fullWidth required/>
                    <TextField id="password-surname-textfield" className={classes.textField} label="Password" variant="outlined" fullWidth required  type="password"/>
                    <Grid container columns={12}
                        direction="row"
                        justifyContent="center"
                        alignItems="center" >
                        <Grid item xs>
                        </Grid>
                        <Grid container item xs={8} direction="row" justifyContent="center"
                                                alignItems="center">
                            <Grid item>
                                <Button variant="contained" size={"large"} className={classes.button}>Enter</Button>
                            </Grid>
                        </Grid>
                        <Grid container direction="column" item xs>
                            <Grid item ><Link href="#" underline="hover" className={classes.link}>Forgot password?</Link></Grid>
                            <Grid item ><Link to='/signin' href="#" underline="hover" className={classes.link}>Register Now</Link></Grid>
                        </Grid>
                    </Grid> 
            </Grid>
            </form>
        </>
    )
}

export default LoginForm;