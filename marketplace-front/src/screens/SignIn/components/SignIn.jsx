import React from "react";
import { 
  BrowserRouter as Router, 
  Route
} from 'react-router-dom';
import Container from "@mui/material/Container";
import Button  from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MuiPhoneNumber from 'material-ui-phone-number';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { makeStyles } from '@mui/styles';
import Logo from '../../Login/components/logo';


const SignIn1 = () => {

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
            <Container>
                <Grid container direction="column" xs={6}>
                    <Grid>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Tipo Usuario</FormLabel>
                            <FormGroup aria-label="position" row>
                                <FormControlLabel value="start"
                                control={<Switch color="primary" />}
                                label="Start"
                                labelPlacement="start"
                                />
                            </FormGroup>
                        </FormControl>
                    </Grid>
                    <Grid></Grid>
                    <Grid></Grid>
                </Grid>
            </Container>
            <form onSubmit={handleSubmit} className={classes.form}>
            <Grid container spacing={4} >
            <Grid item xs={12} sm={6} 
                        container
                        direction="column"
                        rowGap={4}>
                        <TextField id="name-textfield" className={classes.textField} label="name" variant="outlined" fullWidth required/>
                        <TextField id="first-surname-textfield" className={classes.textField} label="first surname" variant="outlined" fullWidth required/>
                        <TextField id="email-textfield" className={classes.textField} label="email" variant="outlined" type="email" fullWidth required />
                        <TextField id="address-textfield" className={classes.textField} label="address" variant="outlined" multiline rows="5" fullWidth required/>
                    </Grid>
                    <Grid item xs={12} sm={6} 
                        container
                        direction="column"
                        rowGap={4}>
                        <TextField id="username-textfield" className={classes.textField} label="username" variant="outlined" type="text" fullWidth required/>
                        <TextField id="password-textfield" className={classes.textField} label="password" variant="outlined" type="password" fullWidth required/>
                        <TextField id="confirm-password-textfield" className={classes.textField} label="confirm password" variant="outlined" type="password" fullWidth required/>
                        <MuiPhoneNumber id="phone-number-textfield"  defaultCountry={'mx'}  label="phone number" className={classes.textField}  variant="outlined" inputProps={{maxLength: 13}} fullWidth required/>
                        <Button variant="contained" size={"large"} className={classes.button}>Save</Button>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}

export default SignIn1;