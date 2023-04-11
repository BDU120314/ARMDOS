import React from 'react'

const LeftSide = (props) => {
  return (
    <nav>
      <div class="sidebar">
        <ul>
          <li>
            <a href="#home">
              <i class="fas fa-home-alt"></i>
              <div class="title">{props.home}</div>
            </a>
          </li>
          <li>
            <a href="#dashbord">
              <i class="fas fa-th-large"></i>
              <div class="title">{props.dashboard}</div>
            </a>
          </li>
          <li>
            <a href="#appointment">
              <i class="fas fa-stethoscope"></i>
              <div class="title">{props.appointment}</div>
            </a>
          </li>
          <li>
            <a href="#setting">
              <i class="fas fa-registered"></i>
              <div class="title">{props.settings}</div>
            </a>
          </li>
          <li>
            <a href="#about">
              <i class="fas fa-question"></i>
              <div class="title">{props.about}</div>
            </a>
          </li>
          <li>
            <a href="#help">
              <i class="fas fa-question"></i>
              <div class="title">{props.help}</div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default LeftSide