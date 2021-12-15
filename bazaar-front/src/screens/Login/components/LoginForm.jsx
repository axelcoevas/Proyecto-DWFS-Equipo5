import React, {useState} from "react";
import { Button, Grid, TextField } from "@mui/material";
import {Link} from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const LoginForm = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const formSubmitHandler = e => {
        e.preventDefault()


        fetch('http://bazaar-api-bedu.herokuapp.com/api/v1/users/login', {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: email, password }),
        })
        
    }

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


    return (
    <>
        <form onSubmit={formSubmitHandler} className={classes.form}>

            <Grid   container
                    direction="column"
                    alignItems="stretch"
                    rowGap={4}>
                    <TextField 
                        id="email-textfield" 
                        className={classes.textField} 
                        label="Email" 
                        variant="outlined" 
                        fullWidth 
                        required 
                        type="email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                    />
                    <TextField 
                        id="password-textfield" 
                        className={classes.textField} 
                        label="Password" 
                        variant="outlined" 
                        fullWidth 
                        required  
                        type="password"
                        value={password} 
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Grid container columns={12}
                        direction="row"
                        justifyContent="center"
                        alignItems="center" >
                        <Grid item xs>
                        </Grid>
                        <Grid container item xs={8} direction="row" justifyContent="center"
                                                alignItems="center">
                            <Grid item>
                                <Button 
                                    variant="contained" 
                                    size={"large"} 
                                    className={classes.button}
                                    type="submit"
                                >
                                    Enter
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container direction="column" item xs>
                            <Grid item ><Link to='#' underline="hover" className={classes.link}>Forgot password?</Link></Grid>
                            <Grid item ><Link to='/signin' underline="hover" className={classes.link}>Register Now</Link></Grid>
                        </Grid>
                    </Grid> 
            </Grid>
        </form>
    </>
    )
}

export default LoginForm;