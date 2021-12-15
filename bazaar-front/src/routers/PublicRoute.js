import { Redirect, Route } from 'react-router-dom';
import useAuth from '../auth/useAuth';

export default function PublicRoute(props) {

    const { user } = useAuth();

    if (user) return <Redirect to="/" />

    return (
        <Route {...props} />
    )
}
