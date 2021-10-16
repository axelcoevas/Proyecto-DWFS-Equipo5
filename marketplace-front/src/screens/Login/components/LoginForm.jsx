import React from "react";
import { Button, Grid, TextField } from "@mui/material";
import { makeStyles } from '@mui/styles';

const LoginForm = () => {

    const style = makeStyles(theme => ({
        form: {
            padding:"4em"
        },

        button:{
            backgroundColor: '#3F3F3F',
            alignSelf: "center",
            width: "20vh"
        },

        textField:{
            backgroundColor: "#F7FAFB",
        }

    }))

    const classes = style()

    function handleSubmit(e) {
        e.preventDefault()
    }


    return (
       <>
            <form onSubmit={handleSubmit} className={classes.form}>

            <Grid item 
                        container
                        direction="column"
                        alignItems="stretch"
                        rowGap={4}>
                        <TextField id="username-textfield" className={classes.textField} label="Username" variant="outlined" fullWidth required/>
                        <TextField id="password-surname-textfield" className={classes.textField} label="Password" variant="outlined" fullWidth required  type="password"/>
                        <Button variant="contained" size={"large"} className={classes.button}>Enter</Button>
            </Grid>
            </form>
        </>
    )
}

export default LoginForm;