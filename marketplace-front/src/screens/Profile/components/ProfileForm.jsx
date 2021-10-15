import { Button, FormControl, Grid, Paper, TextField } from "@mui/material"
import { makeStyles } from '@mui/styles'


import React from "react"
const ProfileForm = () => {
    const style = makeStyles(theme => ({
        form: {
            padding:"4em"
        },

        button:{
            backgroundColor: '#3F3F3F',
            alignSelf: "flex-end"
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
            <Grid container columns={16} columnGap={4}>

                    <Grid xs={16} sm={6}
                        container
                        direction="column"
                        alignItems="center"
                        rowGap={4}>
                        <TextField id="name-textfield" className={classes.textField} label="name" variant="outlined" fullWidth required/>
                        <TextField id="first-surname-textfield" className={classes.textField} label="first surname" variant="outlined" fullWidth required/>
                        <TextField id="email-textfield" className={classes.textField} label="email" variant="outlined" type="email" fullWidth required />
                        <TextField id="address-textfield" className={classes.textField} label="address" variant="outlined" multiline rows="5" fullWidth required/>
                    </Grid>
                    <Grid xs={16} sm={6}
                        container
                        direction="column"
                        alignItems="center"
                        rowGap={4}>
                        <TextField id="username-textfield" className={classes.textField} label="username" variant="outlined" type="text" fullWidth required/>
                        <TextField id="password-textfield" className={classes.textField} label="password" variant="outlined" type="password" fullWidth required/>
                        <TextField id="confirm-password-textfield" className={classes.textField} label="confirm password" variant="outlined" type="password" fullWidth required/>
                        <TextField id="phone-number-textfield" className={classes.textField} label="phone number" variant="outlined"  inputProps={{maxLength: 10}} type="text" fullWidth required/>                       
                        <Button variant="contained" size={"large"} className={classes.button}>Save</Button>
                    </Grid>


                </Grid>


            </form>
        </>
    )
}

export default ProfileForm