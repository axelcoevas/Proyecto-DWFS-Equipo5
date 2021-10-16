import { AddPhotoAlternate } from "@mui/icons-material"
import { Grid, Fab } from "@mui/material"
import { makeStyles } from '@mui/styles'

const UploadImage = ({getImageUrl}) => {

    const handleUploadClick = (e) =>{
        const file = e.target.files[0];
        const url = URL.createObjectURL(file)
        getImageUrl(url)
    }

    

    const style = makeStyles(theme => ({
        button: {
            color: "blue",
            margin: 10
        },

        input: {
             display: "none"
        }
    }))


    const classes = style()

    return (
        <>
            <Grid container direction="column"
                alignItems="center"
                justifyContent="center"
                spacing={12}
                marginX={4}>
                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                onChange={handleUploadClick}
                />
                <label htmlFor="contained-button-file">
                    <Fab component="span" className={classes.button}>
                        <AddPhotoAlternate />
                    </Fab>
                </label>
            </Grid>


        </>
    )
}

export default UploadImage