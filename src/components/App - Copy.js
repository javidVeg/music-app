import React, { Component } from "react";
import axios from "axios";
import DisplaySongs from "./DisplaySong/displaySong";
import Navbar from "./Navbar/Navbar";
import FilterSongs from "./FilterSongs/filterSongs";

class App extends Component{
  constructor(){
    super();
    this.state = {
      songs: [],
      userInput: ""
    }
  }

  componentDidMount(){
    axios.get('http://www.devcodecampmusiclibrary.com/api/music')
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
        song.title.includes(this.state.userInput),
        song.album.includes(this.state.userInput),
        song.artist.includes(this.state.userInput),
        song.genre.includes(this.state.userInput),
        song.releaseDate.includes(this.state.userInput)
      )
    })

    return(
      <div>
        <Navbar />
        <FilterSongs handleChange= {(e)=>this.handleChange(e)} />
        <DisplaySongs songs= {filteredSong} />
      </div>
    );
  }
}

export default App;