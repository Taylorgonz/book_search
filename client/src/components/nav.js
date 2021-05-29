import React from 'react';

function Nav() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navBar navbar-brand " href="#">Book Search</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="/saved">Saved</a>
                        <a className="nav-item nav-link" href="/search">Search</a>
                    </div>
                </div>
            </nav>
            <div className="text-center jumbotron">
                <h2>Google Book Search</h2>
                <h3>Search for and Save Books you Like!</h3>

            </div>
        </div>
    )
}

export default Nav;