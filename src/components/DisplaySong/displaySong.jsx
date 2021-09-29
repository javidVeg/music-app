import React from "react";

const DisplaySongs = (props) => {
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>album</th>
                        <th>artist</th>
                        <th>genre</th>
                        <th>releaseDate</th>
                    </tr>
                </thead>
                <tbody>
                    {/* insert map here */}
                </tbody>
            </table>
        </div>
    )
}

export default DisplaySongs;