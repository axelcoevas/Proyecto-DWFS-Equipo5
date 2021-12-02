import { Button, Grid, TextField } from "@mui/material"
import { makeStyles } from '@mui/styles'
import MuiPhoneNumber from 'material-ui-phone-number';
import { useState } from 'react'

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

    const [form, setForm] = useState({type: 'buyer', creditCardInfo: 'xxxxxxxxxx'});

    const sendForm = async () => {
        const response = await fetch(
            'http://bazaar-api-bedu.herokuapp.com/api/v1/users'
            // 'http://localhost:5000/api/v1/users'
            , {
            method: 'POST', // TODO: change to PUT when editing profile
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(form) 
        }).then(console.log).catch(console.error);

        // return response.json(); // TODO: handle token and redirect
    }

    const handleChange = (e) => {
        setForm((prevForm) => ({ ...prevForm, [e.target.id]: e.target.value }));
      };

    function handleSubmit(e) {
        e.preventDefault()
        // console.log(form)

        // Simple verification, change later to a custom UI
        if (form['password'] !== form['confirmPassword']) {
            alert('Passwords do not match')
        } else {
            sendForm();
            alert('Form submitted')
        }
    }

    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <Grid container spacing={4} >

                <Grid item xs={12} sm={6} 
                    container
                    direction="column"
                    rowGap={4}>

                    <TextField id="firstname"  onChange={handleChange} className={classes.textField} label="First Name" variant="outlined" fullWidth required/>
                    <TextField id="lastname"  onChange={handleChange} className={classes.textField} label="Last Name" variant="outlined" fullWidth required/>
                    <TextField id="email"  onChange={handleChange} className={classes.textField} label="Email" variant="outlined" type="email" fullWidth required />
                    <TextField id="address"  onChange={handleChange} className={classes.textField} label="Address" variant="outlined" multiline rows="5" fullWidth required/>
                </Grid>
                <Grid item xs={12} sm={6} 
                    container
                    direction="column"
                    rowGap={4}>

                    <TextField id="username"  onChange={handleChange} className={classes.textField} label="Username" variant="outlined" type="text" fullWidth required/>
                    <TextField id="password"  onChange={handleChange} className={classes.textField} label="Password" variant="outlined" type="password" fullWidth required/>
                    <TextField id="confirmPassword"  onChange={handleChange} className={classes.textField} label="Confirm password" variant="outlined" type="password" fullWidth required/>
                    {/* MuiPhoneNumber does not return an event object on change, hence the custom function */}
                    <MuiPhoneNumber id="phoneNumber"  defaultCountry={'mx'}  label="Phone number"  onChange={e => setForm({...form, phoneNumber: e})} className={classes.textField}  variant="outlined" inputProps={{maxLength: 13}} fullWidth required/>
                    <Button variant="contained" size={"large"} onClick={handleSubmit} onSubmit={handleSubmit} className={classes.button}>Save</Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default ProfileForm
