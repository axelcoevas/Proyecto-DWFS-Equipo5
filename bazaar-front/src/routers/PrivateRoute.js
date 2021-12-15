import { Redirect, Route, useLocation } from 'react-router-dom';
import useAuth from '../auth/useAuth';

export default function PrivateRoute({ hasType: type, ...rest }) {

    const location = useLocation();
    const { hasType, isLogged } = useAuth();

    if (type && !hasType(type)) return <Redirect to="/" />;

    if (!isLogged()) return <Redirect to="/login" />

    return (
        <Route {...rest} />
    )
}
