// import components
import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import CharacterSheet from "./components/CharacterSheet";
import UserPage from "./components/UserPage";
import CharSearch from "./components/CharSearch";
import Main from "./components/Main";
import UserContext from "./UserContext";
import { Auth0Provider } from "@auth0/auth0-react";

// define component
function App() {

  // useState
  let [loginState, setLoginState] = useState({user: {userId: ""}});

  //login and logout capabilities
  function login(user){
    setLoginState({user: user});
  }

  function logout() {
    setLoginState({user:{}});
  }

  // app rendering
  return (
    <div className="App">
      <BrowserRouter>
        {/*<Auth0Provider>*/}
            <Header/>
              <main className="container">
                <Route path="/character/:charId" component={CharacterSheet}></Route>
                <Route path="/user/:userId" component={UserPage}></Route>
                <Route path="/search" component={CharSearch}></Route>
                <Route exact path= "/" component={Main}></Route>
              </main>
            <Footer/>
        {/*</Auth0Provider>*/}
      </BrowserRouter>
    </div>
  );
}

// export component
export default App;
