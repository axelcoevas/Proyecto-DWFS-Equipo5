import { Card, CardContent, CardMedia, Container } from "@mui/material"
import { makeStyles } from '@mui/styles'
import { useState } from "react"
import UploadImage from "./UploadImage"

const ProfileCard = ({ urlImage, userName }) => {
    const [image, setImage] = useState(urlImage)
    const style = makeStyles(theme => ({
        card: {
            backgroundColor: '#3F3F3F',
            color: 'whitesmoke',
            borderRadius: "16dp",
            margin: "5vh"
        }
        ,
        cardContent: {
            height: "25vh"
        },

        cardMedia: {
            textAlign: "center"
        },

        img: {
            borderRadius: "50%", 
            objectFit: "cover", 
            height: "25vh",
            width: "25vh"
        },

    }))


    const classes = style()


    const getImageUrl = (imageUrl) =>{
        setImage(imageUrl)
    }

    return (
        <>
            <Container maxWidth={"xlg"} >
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <CardMedia className={classes.cardMedia} >
                            <img src={image} className={classes.img} />
                        </CardMedia >
                    </CardContent>
                    <UploadImage getImageUrl={getImageUrl}/>
                    <h1 className={classes.cardMedia}>{userName}</h1>
                </Card>
            </Container>
        </>
    )
}

export default ProfileCard
