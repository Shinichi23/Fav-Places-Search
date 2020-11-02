import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './Components/Home';
import Map from './Components/Map'
import Fav from './Components/Fav'
import Search from './Components/Search/Search'

function App() {
  return (<Router>
    <div>
          
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/map">Map</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/fav">Fav</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/fav">
            <Fav />
          </Route>
        </Switch>
      </div>
    
    </div></Router>
  );
}

export default App;
