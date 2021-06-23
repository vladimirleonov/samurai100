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
import {changeNewPostMessage} from "./redux/state";

function App(props) {

  return (
    <div className={s.app}>
      <Header/>
      <Nav/>
      {/*<div className={s.content}>
          <Route exact path='/' component={Profile} />
          <Route path='/messages' component={Messages} />
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
      </div>*/}
        <div className={s.content}>
            <Route exact path='/' render={ () =>
                <Profile
                    profileState = {props.appState.profilePage}
                    dispatch={props.dispatch}/> }
            />
            {/*<Route exact path='/'> <Profile postData={props.state.postData}/> </Route>*/}
            <Route path='/messages'>
                <Messages
                    messagesState = {props.appState.messagesPage}
                    dispatch={props.dispatch}
                />
            </Route>
            <Route path='/news'> <News/> </Route>
            <Route path='/music'> <Music/> </Route>
            <Route path='/settings'> <Settings/> </Route>
        </div>
    </div>
  );
}

export default App;
