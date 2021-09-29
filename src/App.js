import React, { Component } from "react";
import axios from "axios";
import DisplaySongs from './DisplaySongs'

class App extends Component{
  constructor(){
    super();
    this.state = {
      songs: []
    }
  }

  componentDidmount(){
    axios.get('www.devcodecampmusiclibrary.com/api/music')
    .then(response => this.setState({songs:response.data}));
  }

  render(){
    console.log(this.state.songs)
    return(
      <div>
        <DisplaySongs />
      </div>
    );
  }
}


export default App;
