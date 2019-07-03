import React, {Component} from "react"; 


class SearchBar extends Component{
    state = {video: ""}; 

    onInputChange = (event) => {
        this.setState({ video: event.target.value })
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onVideoSubmit(this.state.video);
    };

    render() {
        return(
            <div className="search-bar ui segment">
                <form 
                className="ui form" 
                onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>YouTube SEARCH</label>
                        <input 
                        type="text" 
                        value={this.state.video}
                        onChange= {this.onInputChange} />
                    </div>
                </form>
            </div>
        )
    }

}; 


export default SearchBar;