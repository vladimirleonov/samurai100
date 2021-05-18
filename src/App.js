import logo from './logo.svg';
import s from './App.module.css';

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className={s.app}>
      <Header/>
      <Nav/>
      <div className={s.content}>
        <Profile/>
      </div>
    </div>
  );
}

export default App;
