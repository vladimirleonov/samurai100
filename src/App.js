import logo from './logo.svg';
import s from './App.module.css';

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className={s.app}>
      <Header/>
      <Nav/>
      <div className={s.content}>
          <Route exact path='/' component={Profile} />
          <Route path='/messages' component={Messages} />
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
      </div>
    </div>
  );
}

export default App;
