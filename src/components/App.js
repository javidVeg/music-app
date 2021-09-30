import React, { Component } from "react";
import axios from "axios";
import DisplaySongs from "./DisplaySong/displaySong";
import Navbar from "./Navbar/Navbar";
import FilterSongs from "./FilterSongs/filterSongs";


class App extends Component{
  constructor(){
    super();
    this.state = {
      songs: [""]
    }
  }

  componentDidMount(){
    axios.get('http://www.devcodecampmusiclibrary.com/api/music')
    .then(response => this.setState({songs:response.data}));
  }

  render(){
    console.log(this.state.songs)
    return(
      <>
        <div>
          <Navbar />
        </div>
        <div>
          <FilterSongs songs= {this.state.songs} />
        </div>
        <div>
          <DisplaySongs songs= {this.state.songs} />
        </div>
      </>
    );
  }
}


export default App;
