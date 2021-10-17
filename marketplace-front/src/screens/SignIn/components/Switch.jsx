import React from 'react';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { makeStyles } from '@mui/styles';

const SwitchCustom = () => {
    const style = makeStyles(theme => ({
      switchcustom: {
        color: "#3F3F3F",
        textAlign: "right",
      },

    }));
    const classes = style()

    return (
          <FormControl component="fieldset" className={classes.switchcustom}>
          <FormLabel component="legend" className={classes.switchcustom}>Tipo Usuario</FormLabel>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="start"
              control={<Switch color="primary"/>}
              label="Buyer"
              labelPlacement="start"
            />
          </FormGroup>
        </FormControl>
  );
}

export default SwitchCustom;