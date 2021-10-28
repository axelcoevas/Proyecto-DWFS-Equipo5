import ProfileCard from "./ProfileCard"
import ProfileForm from "./ProfileForm"

const Profile = () => {
    return (
        <>
            <ProfileCard urlImage={"https://pbs.twimg.com/profile_images/1086332409677660160/Lorn8QZ2.jpg"} userName={"Antonio Labra"} />
            <ProfileForm />
        </>
    )
}

export default Profile