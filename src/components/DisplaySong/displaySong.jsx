import axios from "axios";
import React from "react";
import "./displaySong.css"

const DisplaySongs = (props) => {
    
    const handleClick = id =>  {
        axios.delete(`http://localhost:5000/api/songs/${id}`);
    }
    
    return(
        <div className="table-bordered table-striped table-hover container px-5 col-lg-6">
            <table className="table-bordered table-striped table-hover">
                    <thead>
                        <tr className="tableStyle">
                            <th>Title: </th>
                            <th>Album: </th>
                            <th>Artist: </th>
                            <th>Genre: </th>
                            <th>ReleaseDate: </th>
                        </tr>
                    </thead>
                    <tbody>
                    {props.songs.map((song)=>{
                            return(
                                <tr key={song.id}>
                                    <td>{song.title}</td>
                                    <td>{song.album}</td>
                                    <td>{song.artist}</td>
                                    <td>{song.genre}</td>
                                    <td>{song.releaseDate}</td>
                                    <button type= "delete" onClick= {() => handleClick(song.id)} >X</button>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
        </div>
    )
}

export default DisplaySongs;