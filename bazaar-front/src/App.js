import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./screens/Nav";
import Footer from "./screens/Footer";

import Home from "./screens/Home";
import Login from "./screens/Login";
import SignIn from "./screens/SignIn";
import Product from "./screens/Product";
import Profile from "./screens/Profile/components/Profile";
import NotFound from "./screens/NotFound";
import Search from "./screens/Search";

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/SignIn" exact component={() => <SignIn />} />
          <Route path="/profile" exact component={() => <Profile />} />
          <Route path="/product" exact component={() => <Product />} />
          <Route path="/search" exact component={() => <Search />} />
          <Route component={() => <NotFound />} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
