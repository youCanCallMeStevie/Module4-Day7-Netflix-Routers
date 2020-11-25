import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { Dropdown } from "react-bootstrap";

import logo from "../netflix-logo.png";
import "../App.css";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className='navbar-brand my-1 mx-4'>
					<Link to='/'>
						<img src={logo} alt='logo' width='125' />
					</Link>
				</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item mr-3 active">
              <a className="nav-link" href="#">
              <Link to='/'>Home</Link>
              </a>
            </li>
            <li className="nav-item mr-3">
              <a className="nav-link" href="#">
              <Link to='/tvseries'>TV Shows</Link>
              </a>
            </li>
            <li className="nav-item mr-3">
              <a className="nav-link" href="#">
                Films
              </a>
            </li>
            <li className="nav-item mr-3">
              <a className="nav-link" href="#">
                New & Popular
              </a>
            </li>
            <li className="nav-item mr-3">
              <a className="nav-link" href="#">
                My List
              </a>
            </li>
          </ul>

          <div className="bell-container">
            <i className="fa fa-bell mr-3 fa-lg"></i>
          </div>
          <Dropdown>
            <Dropdown.Toggle variant="transparent" id="dropdown-basic">
              <span className="avatar mr-3">
                <img src="https://pbs.twimg.com/profile_images/1198967349312991232/lXeo3AMv_400x400.png" />
              </span>{" "}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <span className="mini-avatar">
                  <img src="https://pbs.twimg.com/profile_images/1198967349312991232/lXeo3AMv_400x400.png" />
                </span>
                Orhan
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <span className="mini-avatar">
                  <img src="https://pbs.twimg.com/profile_images/1198967349312991232/lXeo3AMv_400x400.png" />
                </span>
                Stephanie
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                <span className="mini-avatar">
                  <img src="https://pbs.twimg.com/profile_images/1198967349312991232/lXeo3AMv_400x400.png" />
                </span>
                Manuel
              </Dropdown.Item>
              <Dropdown.Item href="#/action-4">
                <span className="mini-avatar">
                  <img src="https://pbs.twimg.com/profile_images/1198967349312991232/lXeo3AMv_400x400.png" />
                </span>
                Ermal
              </Dropdown.Item>
              <div className="dropdown-divider"></div>
              <Dropdown.Item href="#/action-5">Manage Profiles</Dropdown.Item>
              <Dropdown.Item href="#/action-6">Accounts</Dropdown.Item>
              <Dropdown.Item href="#/action-7">Back Office</Dropdown.Item>
              <Dropdown.Item href="#/action-8">Sign out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
    );
  }
}

export default withRouter(NavBar);
