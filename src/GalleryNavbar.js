import React from 'react'
import {Link} from 'react-router'

class GalleryNavbar extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom">
                <div className="container">
                    <div className="navbar-header page-scroll">
                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                        </button>
                        <a className="navbar-brand" href="#page-top">Jeb z laserka</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="hidden">
                                <a href="#page-top"></a>
                            </li>
                            <li className="page-scroll">
                                <a href="/">Strona główna</a>
                            </li>
                        </ul>
                    </div>

                </div>

            </nav>
        )
    }

}

export default GalleryNavbar