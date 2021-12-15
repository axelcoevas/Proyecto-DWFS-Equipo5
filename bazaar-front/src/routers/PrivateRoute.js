import { Redirect, Route } from 'react-router-dom';
import useAuth from '../auth/useAuth';

export default function PrivateRoute(props) {

    const { user } = useAuth();

    if (!user) return <Redirect to="/login" />

    return (
        <Route {...props} />
    )
}
