// This component is a search form in which users can enter a character name and choose a server name, which will be passed to the API.
import { Component } from "react";
import XIVAPI from "xivapi-js";
const xiv = new XIVAPI();

// define component
class CharSearch extends Component {
    constructor (props){
        super(props);

        // state
        this.state = {
            charName: "",
            serverName: ""
        };

        // bind methods
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    resultHandler = this.props.resultHandler;

    // handle input change
    handleInputChange(event) {
        const target = event.target;
        const value =  target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    // option array
    serverList = ["Adamantoise", "Aegis", "Alexander", "Anima", "Asura", "Atomos",
    "Bahamut", "Balmung", "Behemoth", "Belias", "Brynhildr",
    "Cactuar", "Carbuncle", "Cerberus", "Chocobo", "Coeurl",
    "Diabolos", "Durandal", "Excalibur", "Exodus", "Faerie","Famfrit", "Fenrir",
    "Garuda", "Gilgamesh", "Goblin", "Gungnir", "Hades", "Hyperion",
    "Ifrit", "Ixion", "Jenova", "Kujata", "Lamia", "Leviathan", "Lich", "Louisoix", 
    "Malboro", "Mandragora", "Masamune", "Mateus", "Midgardsormr", "Moogle",
    "Odin", "Omega", "Pandemonium", "Phoenix", "Ragnarok","Ramuh", "Ridill",
    "Sargatanas", "Shinryu", "Shiva", "Siren", "Tiamat",  "Titan", "Tonberry", "Typhon",
    "Ultima", "Ultros", "Unicorn", "Valefor", "Yojimbo", "Zalera", "Zeromus", "Zodiark"];

    // search submission method
    handleSubmit(e) {
        e.preventDefault();

        // values for second search
        let charId = 0;
        let charData = {};

        // run first search based on user input
        xiv.character.search(this.state.charName, {server: this.state.serverName}).then( (response) => {
            console.log(response);
            charId = response.Results[0].ID;
            console.log(`charId is ${charId}`);
        }).then( () => {
            // get specific character data in second search
            xiv.character.get(charId).then( function (response){
                charData = response.Character;
            }).then( () => {
                // save the desired data points
                let newChar = {
                    name: charData.Name,
                    portrait: charData.Portrait
                }
                console.log(newChar);
            });
        });
    }

// define component
render(){
    return (
        <form className="form-group">
            <label htmlFor="charSearchInput">Character Name: </label>
            <input type="text" id="charSearchInput" name="charName" onChange={this.handleInputChange}/>
            <br/>
            <label htmlFor="charServerInput">Server: </label>
            <input list="xivServers" id="charServerInput" name="serverName" onChange={this.handleInputChange}/>    
                <datalist id="xivServers">
                    {this.serverList.map( (server) => {
                        return (<option key={server} value={server}/>);
                    })}
                </datalist>
            <button type="submit" onClick={this.handleSubmit}>Search</button>
        </form>
    );
}

}
// export module
export default CharSearch;