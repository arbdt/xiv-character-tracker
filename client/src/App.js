// import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import CharacterSheet from "./components/CharacterSheet";
import UserPage from "./components/UserPage";
import CharSearch from "./components/CharSearch";

// define component
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <main className="container">
          <Route path="/character/:charId" component={CharacterSheet}></Route>
          <Route path="/user" component={UserPage}></Route>
          <Route path= "/search" component={CharSearch}></Route>
        </main>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

// export component
export default App;
