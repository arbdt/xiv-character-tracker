// import components
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import CharacterSheet from "./components/CharacterSheet";
import UserPage from "./components/UserPage";
import CharSearch from "./components/CharSearch";
import Main from "./components/Main";

// define component
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <Header/>
        <main className="container">
          <Route path="/character/:charId" component={CharacterSheet}></Route>
          <Route path="/user/:userId" component={UserPage}></Route>
          <Route path="/search" component={CharSearch}></Route>
          <Route exact path= "/" component={Main}></Route>
        </main>
        <Footer/>
        </div>
      </BrowserRouter>
    </div>
  );
}

// export component
export default App;
