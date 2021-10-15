import './App.css';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom';

import Nav from './screens/Nav';
import Footer from './screens/Footer';

import Home from './screens/Home';
import Login from './screens/Login';
import Product from './screens/Product';
import Profile from './screens/Profile/components/Profile';

const App = () => {
  return (
    <>
      <Router>
        <Nav/>
        <Switch>
          <Route path='/' exact component={() => <Home />} />
          <Route path='/login' exact component={() => <Login />} />
          <Route path='/profile' exact component={() => <Profile urlImage={"https://pbs.twimg.com/profile_images/1086332409677660160/Lorn8QZ2.jpg"} userName={"Antonio Labra"}/>} />
          {/* <Route path='/product' exact component={() => <Product />} /> */}
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
