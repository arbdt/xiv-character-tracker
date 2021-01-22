// This component is a search form in which users can enter a character name and choose a server name, which will be passed to the API.
import React, {Component} from "react";
import XIVAPI from "xivapi-js";
const xiv = new XIVAPI();

// define component
class CharSearch extends Component {
    constructor (props){
        super(props);

        // state
        this.state = {
            charName: "",
            serverName: "",
            searchResults: []
        };

        // bind methods
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

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

        // run search based on user input
        console.log(`searching for ${this.state.charName} of ${this.state.serverName}`);
        xiv.character.search(this.state.charName, {server: this.state.serverName}).then( (response) => {
            console.log(response);
            this.setState({searchResults: response.Results});
        });
    }

// define component output
render(){
    return (
        <div className="card m-4">
            <form className="form card-body" onSubmit={this.handleSubmit}>{/* form for searching via API */}
                <h3 className="card-title">Search for a character</h3>
                <div className="form-group">
                    <label htmlFor="charSearchInput">Character Name: </label>
                    <input className="form-control" type="text" id="charSearchInput" name="charName" onChange={this.handleInputChange} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="charServerInput">Server: </label>
                    <input className="form-control" list="xivServers" id="charServerInput" name="serverName" onChange={this.handleInputChange} required/>    
                        <datalist id="xivServers">
                            {this.serverList.map( (server) => {
                                return (<option key={server} value={server}/>);
                            })}
                        </datalist>
                </div>
                <button className="btn" type="submit"><i className="fas fa-search"></i> Search</button>
            </form>
            <div>
                <ul className="list-group"> {/* list to display results of search */}
                    {this.state.searchResults !== undefined ? this.state.searchResults.map( (entry) => {
                        return (
                            <li className="list-group-item" key={entry.ID}>
                                <img src={entry.Avatar} alt={entry.Name} width="64" height="64"/>
                                &emsp; {entry.Name}
                                &emsp; <a href={"/character/" + entry.ID}><i className="fas fa-eye"></i> View</a>
                            </li>
                        );
                    })
                    : <></>}
                </ul>
            </div>
        </div>
    );
}

}
// export module
export default CharSearch;