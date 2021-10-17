import React from 'react';
import LogoImage from '../../../assets/logo.png'
import { Grid } from "@mui/material";

const Logo = () => {
    return (
        <>
            <Grid item container
                    justifyContent="center"
                    alignItems="stretch"> 
                <img src={LogoImage} alt="Logo pagina" />
            </Grid>
        </>
    )
}

export default Logo;