// This component is a search form in which users can enter a character name and choose a server name, which will be passed to the API.

// imports
import React, {Component} from "react";
import {withAuth0} from "@auth0/auth0-react";
import XIVAPI from "@xivapi/js";
import Axios from "axios";
const xiv = new XIVAPI();

// define component
class CharSearch extends Component {
    constructor (props){
        super(props);

        // state
        this.state = {
            charName: "",
            serverName: "",
            searchResults: [],
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
        console.log(`Searching for ${this.state.charName} of ${this.state.serverName}`);
        xiv.character.search(this.state.charName, {server: this.state.serverName}).then( (response) => {
            this.setState({searchResults: response.Results});
        });
    }

    // character save to user method
    async saveCharToUser(user, character){
        // save to user profile via api
        console.log(`Saving character to user's profile...`);
        try {
            let userResult = await Axios.put("/api/user/characters/add", {userId: user, charId: character});
            if (userResult.data !== null){
                console.log("User data saved successfully.");
            }
        } catch (error){
            console.error(error);
        }
    }

    // handle saving character to user
    handleCharSave = (e) => {
        e.preventDefault();

        // run method to associate character id with user data
        this.saveCharToUser(e.target.dataset.user, e.target.dataset.charid);

        e.target.className="btn btn-secondary";
           
    }

// define component output
render(){
    //auth0 hook for user details
    const {user} = this.props.auth0;

    return (
        <div className="searchCard card m-4">
            <h3 className="card-header">Search for a character</h3>
            <form className="form card-body" onSubmit={this.handleSubmit}>{/* form for searching via API */}
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
                <button className="btn btn-success" type="submit"><i className="fas fa-search"></i><span className="d-none d-md-inline"> Search</span></button>
            </form>
            <div className="card-body">
                <p className="card-text">Only the first 50 results are displayed. If the character you seek is not listed, please refine your search.</p>
                <ul className="list-group resultList"> {/* list to display results of search */}
                    {this.state.searchResults !== undefined && this.state.searchResults.length > 0 ? this.state.searchResults.map( (entry) => {
                        return (
                            <li className="list-group-item d-flex justify-content-between align-items-center" key={entry.ID}>
                                <div className="col">
                                    <img src={entry.Avatar} alt={entry.Name} width="64" height="64"/>
                                </div>
                                <div className="col font-weight-bold">
                                    {entry.Name}
                                </div>
                                <div className="col">
                                    {entry.Server}
                                </div>
                                <div className="col">
                                    <a className="btn btn-primary" href={"/character/" + entry.ID}><i className="fas fa-eye"></i><span className="d-none d-md-inline"> View</span></a>
                                </div>
                                <div className="col">
                                    {user !== undefined && 
                                    <button className="btn btn-success" onClick={this.handleCharSave} data-user={user.sub}
                                    data-charid={entry.ID} data-charname={entry.Name} data-charserver={entry.Server} data-charavatar={entry.Avatar}>
                                    <i className="fas fa-user-plus"></i><span className="d-none d-md-inline"> Track</span>
                                    </button>}
                                </div>
                                
                            </li>
                        );
                    })
                    : <p>No search results to display.</p>}
                </ul>
            </div>
        </div>
    );
}

}
// export module
export default withAuth0(CharSearch);