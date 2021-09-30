import React from "react";
import "./displaySong.css"
import "../FilterSongs/filterSongs"

const DisplaySongs = (props) => {
    return(
        <div className="table-bordered table-striped table-hover container px-5 col-lg-6 tableStyle">
            <table>
                <div>
                    <tr className="table tableStyle">
                        <div class="">
                        <th>Title: </th>
                        <th>Album: </th>
                        <th>Artist: </th>
                        <th>Genre: </th>
                        <th>ReleaseDate: </th>
                        </div>
                    </tr>
                </div>
                
                    <div className="table-bordered table-striped table-hover">{props.songs.map((song)=>{
                            return(
                                <tr>
                                    <td>{song.title}</td>
                                    <td>{song.album}</td>
                                    <td>{song.artist}</td>
                                    <td>{song.genre}</td>
                                    <td>{song.releaseDate}</td>
                                </tr>
                                
                            )
                        })}
                    </div>
                    
                
            </table>
        </div>
    )
}

export default DisplaySongs;