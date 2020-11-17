import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Welcome</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                <i className="fa fa-home"></i>
                                Home
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fa fa-envelope-o">
                                    <span className="badge badge-danger">11</span>
                                </i>
                                Link
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">
                            <i className="fa fa-envelope-o">
                                <span className="badge badge-warning">11</span>
                            </i>
                            Disabled
                            </a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder={"Search Item.."} />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            <i className="fa fa-bell">
                                <span className="badge badge-info">11</span>
                            </i>
                            ALerts
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            <i className="fa fa-globe">
                                <span className="badge badge-success">11</span>
                            </i>
                            Notifications
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
