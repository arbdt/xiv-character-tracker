// import components
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route} from "react-router-dom";
import CharacterSheet from "./components/CharacterSheet";
import UserPage from "./components/UserPage";
import CharSearch from "./components/CharSearch";
import Main from "./components/Main";
import { useAuth0 } from "@auth0/auth0-react";

// define component
function App() {

  const {isLoading} = useAuth0();

  if (isLoading){
    return (<div>Page is loading...</div>);
  }

    // app rendering
  return (
    <div className="App">
      <Header/>
        <main className="container">
          <Route path="/character/:charId" component={CharacterSheet}></Route>
          <Route path="/user" component={UserPage}></Route>
          <Route path="/search" component={CharSearch}></Route>
          <Route exact path= "/" component={Main}></Route>
        </main>
      <Footer/>
    </div>
  );
}

// export component
export default App;
