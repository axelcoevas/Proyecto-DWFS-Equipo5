import { useState } from "react";
import { createContext } from "react";
import { useHistory } from "react-router-dom";
import types from '../helpers/types';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const history = useHistory();
    const session = JSON.parse(localStorage.getItem('user'));
    const type = JSON.parse(localStorage.getItem('account'));

    const [user, setUser] = useState(session);
    const [account, setAccount] = useState(type);

    const login = (userCredentials) => {

        const requestOptions = {
            method: "POST",
            cors: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userCredentials),
        };
        try {
            fetch('http://bazaar-api-bedu.herokuapp.com/api/v1/users/login', requestOptions)
                .then(response => response.json())
                .then((data) => setUser(localStorage.setItem('user', JSON.stringify({ username: data.username, email: data.email, type: data.type, token: data.token }))))
                .then(setAccount(localStorage.setItem('account', JSON.stringify(user.type))))
        } catch (err) {
            console.error(err);
        }
    }

    const logout = () => setUser(localStorage.removeItem('user'));

    const isLogged = () => JSON.parse(localStorage.getItem('user'));

    const hasType = () => JSON.parse(localStorage.getItem('account'));;

    const contextValue = {
        user,
        account,
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
