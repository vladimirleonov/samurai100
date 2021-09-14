import React from "react";
import s from './App.module.css';

import HeaderContainer from "./components/Header/HeaderContainer";
import Nav from "./components/Nav/Nav";
import ProfileContainer from "./components/Profile/ProfileContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import UsersContainer from "./components/Users/UsersContainer";
import Settings from "./components/Settings/Settings";
import Login from './components/Login/Login';

import {  Route } from "react-router-dom";
import {connect} from "react-redux";
import {setInitializedThunkCreator} from "./redux/app-reducer";
import {compose} from "redux";
import Preloader from "./components/common/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.setInitializedThunkCreator();
    }

    render () {
        return (
            <>
                {
                    !this.props.isInitialized ? <Preloader/> :

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
                                <Route path='/profile/:userId?' render={ () => <ProfileContainer/> }/>
                                {/*<Route exact path='/'> <Profile postData={props.state.postData}/> </Route>*/}
                                <Route path='/messages'><MessagesContainer/></Route>
                                <Route path='/news'> <News/> </Route>
                                <Route path='/music'> <Music/> </Route>
                                <Route path='/users'> <UsersContainer/> </Route>
                                <Route path='/settings'> <Settings/> </Route>
                                <Route path='/login'> <Login/> </Route>
                            </div>
                        </div>
                }
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return (
        {
            isInitialized: state.app.isInitialized
        }
    )
}

export default compose(
    connect(mapStateToProps, {
        setInitializedThunkCreator
    })
)
(App);
