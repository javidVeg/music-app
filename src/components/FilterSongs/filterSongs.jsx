import React from "react";
import "./filterSongs.css"

function FilterSongs(props) {
    return (
        <form>
            <h3 className= "centerP">Filter Songs: <input type="text"
            onChange= {props.handleChange} /> 
            </h3>   
        </form>
    );
}
    



export default FilterSongs;