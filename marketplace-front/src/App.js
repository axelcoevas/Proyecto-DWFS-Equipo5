import './App.css';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom';

import Home from './screens/Home';
import Login from './screens/Login';
import Nav from './screens/Nav';
import Footer from './screens/Footer';

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact component={() => <Home />} />
          <Route path='/login' exact component={() => <Login />} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
