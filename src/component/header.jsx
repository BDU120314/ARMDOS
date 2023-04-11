import React from 'react'

const Headere = () => {
  return (
    <header>
      <div class="header">
        <div className="logo">
          <div>
            <img src="logo.jpg" alt="" class="logo" />
          </div>
          <div>
            <h2>ARMDOS</h2>
          </div>
        </div>
        <ul>
          <li>
            <a href="index.html" class="header">
              Home
            </a>
          </li>
          <li>
            <a href="aboutus.html" class="header">
              About Us
            </a>
          </li>
          <li>
            <a href="contactus.html" class="header">
              Contact Us
            </a>
          </li>
          <li>
            <a href="logout.html" class="header">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Headere