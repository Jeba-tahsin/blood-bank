import React from "react";
import { Link } from "react-router-dom";
import {BiDonateBlood} from 'react-icons/bi'

const Header = () => {
  return (
    <div className='sticky-top'>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <BiDonateBlood/>
          <Link class="navbar-brand" href="#">
            Blood Bank
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
              <Link class="nav-link" to="/about">
                About
              </Link>
              <Link class="nav-link" to="/services">
                Services
              </Link>
              <Link class="nav-link" to="/blog">
                Blog
              </Link>
              <Link class="nav-link" to="/login">
                login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
