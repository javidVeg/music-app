import React from "react";

const DisplaySongs = (props) => {
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title: </th>
                        <th>album</th>
                        <th>artist</th>
                        <th>genre</th>
                        <th>releaseDate</th>
                    </tr>
                </thead>
                <tbody>
                    <div>
                        <ul>
                        {props.songs.map((song)=>{
                            return(
                                <li>Title: {song.title}
                                <br></br> 
                                Album: {song.album} 
                                <br></br>
                                Artist: {song.artist} 
                                <br></br>
                                Genre: {song.genre} 
                                <br></br>
                                Release Date: {song.releaseDate}</li>
                            )
                        })}
                    </ul>
                    </div>
                </tbody>
            </table>
        </div>
    )
}

export default DisplaySongs;