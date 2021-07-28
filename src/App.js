import logo from './logo.svg';
import s from './App.module.css';

import HeaderContainer from "./components/Header/HeaderContainer";
import Nav from "./components/Nav/Nav";
import ProfileContainer from "./components/Profile/ProfileContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import UsersContainer from "./components/Users/UsersContainer";
import Settings from "./components/Settings/Settings";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UsersOldBeforeCreatedClassComponents from "./components/Users/UsersOld(before created class components)";

function App() {
  return (
    <div className={s.app}>
      <HeaderContainer/>
      <Nav/>
      {/*<div className={s.content}>
          <Route exact path='/' component={Profile} />
          <Route path='/messages' component={Messages} />
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
      </div>*/}
        <div className={s.content}>
            <Route path='/profile/:userId' render={ () => <ProfileContainer/> }/>
            {/*<Route exact path='/'> <Profile postData={props.state.postData}/> </Route>*/}
            <Route path='/messages'><MessagesContainer/></Route>
            <Route path='/news'> <News/> </Route>
            <Route path='/music'> <Music/> </Route>
            <Route path='/users'> <UsersContainer/> </Route>
            <Route path='/settings'> <Settings/> </Route>
        </div>
    </div>
  );
}

export default App;
