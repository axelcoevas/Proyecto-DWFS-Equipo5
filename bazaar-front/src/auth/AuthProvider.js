import { useState } from "react";
import { createContext } from "react";
import { useHistory } from "react-router-dom";
//import types from '../helpers/types';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const history = useHistory();
    const [user, setUser] = useState(null);

    const login = (userCredentials) => {
        fetch('http://bazaar-api-bedu.herokuapp.com/api/v1/users/login', {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userCredentials),
        })
            .then(response => response.json())
            .then((data) => setUser({ username: data.username, email: data.email, token: data.token }))
        console.log(user);
    }

    const logout = () => setUser(null);

    const isLogged = () => !!user;

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
