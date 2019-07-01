import React, {Component} from "react"; 


class SearchBar extends Component{
    state = {tweet: ""}; 

    onInputChange = (event) => {
        this.setState({ tweet: event.target.value })
    };

    onFormSubmit = (event) => {
        event.preventDefault();
    };

    render() {
        return(
            <div className="search-bar ui segment">
                <form 
                className="ui form" 
                onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>TWEET SEARCH</label>
                        <input 
                        type="text" 
                        value={this.state.tweeet}
                        onChange= {this.onInputChange} />
                    </div>
                </form>
            </div>
        )
    }

}; 


export default SearchBar;