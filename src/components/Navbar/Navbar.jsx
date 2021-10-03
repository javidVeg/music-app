import React from "react";
import "./Navbar.css"

function Navbar (){
    return (
        <nav className="nav justify-content-center navbar navbar-expand-lg navbar-light container-fluid navText col-lg-6">
            <a className="navbar-brand" href="https://www.apple.com/apple-music/">Music<br></br>Application</a>
            <a className="navbar-brand" href="https://en.wikipedia.org/wiki/The_Beatles">The<br></br>Beatles</a>
            <a className="navbar-brand" href="https://en.wikipedia.org/wiki/The_Postal_Service">The Postal<br></br>Service</a>
            <a className="navbar-brand" href="https://www.amazon.com/MP3-Music-Download/b?ie=UTF8&node=163856011">Search for<br></br>Some Albums</a>
            <a className="navbar-brand" href="https://www.beatlesbible.com/songs/">The Beatles<br></br>Titles</a>
            <a className="navbar-brand" href="https://www.liveabout.com/are-alternative-music-indie-the-same-94033#:~:text=Alternative%20and%20indie%2C%20at%20their,straight%20from%20the%20British%20Isles.">Folk Rock<br></br>vs Alt Indie</a>

        </nav>
    )
}

export default Navbar;