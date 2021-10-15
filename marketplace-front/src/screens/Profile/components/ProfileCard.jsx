import { Card, CardContent, CardMedia, Container } from "@mui/material"
import { makeStyles } from '@mui/styles'

const ProfileCard = ({ urlImage, userName }) => {
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
            height: "25vh"
        }
    }))


    const classes = style()

    return (
        <>
            <Container maxWidth={"xlg"} >

                <Card className={classes.card}>

                    <CardContent className={classes.cardContent}>
                        <CardMedia className={classes.cardMedia} >
                            <img src={urlImage} className={classes.img} />
                        </CardMedia>

                    </CardContent>

                    <h1 className={classes.cardMedia}>{userName}</h1>
                </Card>
            </Container>
        </>
    )
}

export default ProfileCard
