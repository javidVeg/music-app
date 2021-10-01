import React from "react";


function FilterSongs(props) {
    return (
        <form>
            <p>Filter Songs</p>
            <input type="text"
            onChange= {props.handleChange} />
            
        </form>
    );
}
    



export default FilterSongs;