import './App.css';
import './Home.css'
import NavBar from './NavBar';
import Home from './Home';
import Login from './Login';
import Cart from './Cart';
import AllProducts from './allProducts';
import NotYet from './notYet';
import Congrats from './Congrats';
import Register from './Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/home">
            <NavBar />
            <Home />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/cart">
            <Cart/>
            <NavBar/>
          </Route>
          <Route path="/all-products">
            <NavBar/>
            <AllProducts/>
          </Route>
          <Route path="/notYet">
            <NotYet/>
          </Route>
          <Route path="/congrats">
            <Congrats/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
