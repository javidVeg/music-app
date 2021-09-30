import React from "react";
import { Component } from "react";

class FilterSongs extends Component {
    constructor(){
      super();
      this.state = {
        songs: [""]
      }
    }

    render() {
        return (
            <form>
                <p>Filter Songs</p>
                <div>
                    <input type="text" name="songs" value={this.state.songs} 
                    onChange={this.handleChange} /> 
                </div>
            </form>
        );
    }
}


export default FilterSongs;