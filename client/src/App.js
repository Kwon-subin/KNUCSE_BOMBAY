import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Main from './pages/Main'
import Login from './pages/LoginPage/Login';
import Register from './pages/Register'
import Matching from './pages/MatchPage/Matching';
import SpeedMatch from './pages/SpeedMatch';
import Mentor from './pages/MatchPage/Mentor'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Main} exact/>
        <Route path='/match' component={Matching} exact/>
        <Route path='/find' component={Mentor} exact/>
        <Route path='/speedmatch' component={SpeedMatch} exact/>
        <Route path='/login' component={Login} exact/>
        <Route path='/register' component={Register}/>
      </Switch>
    </Router>
  );
}

export default App;
