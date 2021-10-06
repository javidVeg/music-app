import React, { Component } from "react";
import axios from "axios";
import DisplaySongs from "./DisplaySong/displaySong";
import Navbar from "./Navbar/Navbar";
import FilterSongs from "./FilterSongs/filterSongs";
import AddSong from "./AddSong/addSong";


class App extends Component{
  constructor(){
    super();
    this.state = {
      songs: [],
      userInput: ""
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/songs')
    .then(response => this.setState({songs:response.data}));
  }

  handleChange(event){
    this.setState({
      userInput: event.target.value
    }, ()=>console.log(this.state.userInput));
  }

  render(){
    let filteredSong = this.state.songs.filter(song => {
      
      return(
        song.title.includes(this.state.userInput) ||
        song.album.includes(this.state.userInput) ||
        song.artist.includes(this.state.userInput) ||
        song.genre.includes(this.state.userInput) ||
        song.releaseDate.includes(this.state.userInput)
      )
    })

    return(
      <div>
        <Navbar />
        <hr solid></hr>
        <FilterSongs handleChange= {(e)=>this.handleChange(e)} />
        <DisplaySongs songs= {filteredSong} />
        <AddSong />
      </div>
    );
  }
}

export default App;
