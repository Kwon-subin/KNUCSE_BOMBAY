import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Test from './pages/Test'
import Test2 from './pages/Test2'
import Main from './pages/Main'
import Login from './pages/LoginPage/Login';
import Register from './pages/Register'
import Matching from './pages/MatchPage/Matching';
import SpeedMatch from './pages/SpeedMatch';
import Mentor from './pages/MatchPage/Mentor';
import Mentee from './pages/MatchPage/Mentee';
import Mypage from './pages/Mypage';
import Notice from './pages/Notice';
import NewPost from './pages/newPost';
import Servey from './pages/Servey';
import Chatting from './pages/Chatting';

function App() {
  const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = 'Bloom';
  return (
    <Router>
      <Switch>
        <Route path='/test' component={Test} exact/>
        <Route path='/test2' component={Test2} exact/>
        <Route path='/' component={Main} exact/>
        <Route path='/notice' component={Notice} exact/>
        <Route path='/match' component={Matching} exact/>
        <Route path='/find' component={Mentor} exact/>
        <Route path='/find2' component={Mentee} exact/>
        <Route path='/newPost' component={NewPost} exact/>
        <Route path='/speedmatch' component={SpeedMatch} exact/>
        <Route path='/mypage' component={Mypage} exact/>
        <Route path='/servey' component={Servey} exact/>
        <Route path='/chatting' component={Chatting} exact/>
        <Route path='/login' component={Login} exact/>
        <Route path='/register' component={Register}/>
      </Switch>
    </Router>
  );
}

export default App;
