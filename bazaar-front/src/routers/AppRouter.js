import { Route, Switch } from "react-router-dom";

import Nav from "../screens/Nav";
import Footer from "../screens/Footer";

import Compra from "../screens/Compra";
import Dashboard from "../screens/Dashboard";
import Home from "../screens/Home";
import Login from "../screens/Login";
import SignIn from "../screens/SignIn";
import Product from "../screens/Product";
import Profile from "../screens/Profile/components/Profile";
import NotFound from "../screens/NotFound";
import Search from "../screens/Search";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

export default function AppRouter() {
    return (
        <>
            <Nav />
            <Switch>
                <Route path="/" exact component={() => <Home />} />
                <Route path="/product" exact component={() => <Product />} />
                <Route path="/search" exact component={() => <Search />} />
                <PublicRoute path="/login" exact component={() => <Login />} />
                <PublicRoute path="/SignIn" exact component={() => <SignIn />} />
                <PrivateRoute path="/profile" exact component={() => <Profile />} />
                <PrivateRoute path="/dashboard" exact component={() => <Dashboard />} />
                <PrivateRoute path="/compra" exact component={() => <Compra />} />
                <Route path="*" component={() => <NotFound />} />
            </Switch>
            <Footer />
        </>
    )
}
