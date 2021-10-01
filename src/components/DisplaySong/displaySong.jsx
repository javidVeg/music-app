import React from "react";
import "./displaySong.css"
import "../FilterSongs/filterSongs"

const DisplaySongs = (props) => {
    return(
        <div className="table-bordered table-striped table-hover container px-5 col-lg-6 tableStyle">
            <table className="table-bordered table-striped table-hover">
                    <thead>
                        <tr className="table tableStyle">
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
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
        </div>
    )
}

export default DisplaySongs;