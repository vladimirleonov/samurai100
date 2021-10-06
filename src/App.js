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

import {BrowserRouter as Router, Route} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {setInitializedThunkCreator} from "./redux/app-reducer";
import {compose} from "redux";
import Preloader from "./components/common/Preloader";
import {getIsInitialized} from "./redux/app-selector";
import store from "./redux/redux-store";

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
            isInitialized: getIsInitialized(state)
        }
    )
}

const AppContainer =  compose(
    connect(mapStateToProps, {
        setInitializedThunkCreator
    })
)(App);


const AppWrapper = (props) => {
    return (
        <Provider store={store}>
            <Router>
                <AppContainer />
            </Router>
        </Provider>
    )
}

export default AppWrapper;

