import { useState, useEffect } from "react";
import { createContext } from "react";
import { useHistory } from "react-router-dom";
import types from '../helpers/types';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const history = useHistory();
    const session = JSON.parse(localStorage.getItem('user'));
    const [user, setUser] = useState(session);

    const login = (userCredentials) => {

        const requestOptions = {
            method: "POST",
            cors: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userCredentials),
        };
        fetch('http://bazaar-api-bedu.herokuapp.com/api/v1/users/login', requestOptions)
            .then(response => response.json())
            .then((data) => setUser(localStorage.setItem('user', JSON.stringify({ username: data.username, email: data.email, token: data.token }))))
    }

    const logout = () => setUser(localStorage.removeItem('user'));

    const isLogged = () => JSON.parse(localStorage.getItem('user'));

    const hasType = (type) => user?.type === type;

    const contextValue = {
        user,
        isLogged,
        hasType,
        login,
        logout
    }


    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}
