function Search(props){
    let handleSubmit = props.handler;
    return (
        <form>
            <label htmlFor="charSearchInput"></label>
            <input type="text" id="charSearchInput"></input>
            <label htmlFor="serverSearchInput"></label>
            <input type="text" id="serverSearchInput"></input>
            <button type="submit" onClick={handleSubmit}>Search</button>
        </form>
    );
}

export default Search;