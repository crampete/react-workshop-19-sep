import React from "react"


class NavBar extends React.Component {
    render() {
        return(
        <div id="navbar">
            <div id="navbar-container">
                <a id="brand" href="http://www.crampete.com">MYZON</a>
                <a id="profile" href="http://www.crampete.com">PROFILE</a>
            </div>
        </div>
        )
    }
}

export default NavBar;