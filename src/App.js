import React, {Suspense} from "react";
import s from './App.module.css';

import HeaderContainer from "./components/Header/HeaderContainer";
import Nav from "./components/Nav/Nav";
//import ProfileContainer from "./components/Profile/ProfileContainer";
// import MessagesContainer from "./components/Messages/MessagesContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
//import UsersContainer from "./components/Users/UsersContainer";
import Settings from "./components/Settings/Settings";
import Login from './components/Login/Login';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {setInitializedThunkCreator} from "./redux/app-reducer";
import {compose} from "redux";
import Preloader from "./components/common/Preloader";
import {getIsInitialized} from "./redux/app-selector";
import store from "./redux/redux-store";
import WithSuspense from "./hoc/WithSuspense";

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const MessagesContainer = React.lazy(() => import('./components/Messages/MessagesContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

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
                            <div className={s.content}>
                                <Route path='/profile/:userId?' render={ () => {
                                    return <Suspense fallback={<div>Загрузка...</div>}>
                                        <ProfileContainer/>
                                    </Suspense>
                                }}/>
                                <Route path='/messages' render={
                                    WithSuspense(MessagesContainer)
                                }/>

                                <Route path='/news'> <News/> </Route>
                                <Route path='/music'> <Music/> </Route>
                                <Route path='/users' render={
                                    WithSuspense(UsersContainer)
                                }/>
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

