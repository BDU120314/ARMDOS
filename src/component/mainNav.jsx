import React from "react";

const MainNav = () => {
  return (
    <div class="cards">
      <div class="card">
        <div class="card-content">
          <div class="number">67</div>
          <div class="card-name">New Request</div>
        </div>
        <div class="icon-box">
          <i class="fas fa-question"></i>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <div class="number">105</div>
          <div class="card-name">New Report</div>
        </div>
        <div class="icon-box">
          <i class="fas fa-file-alt"></i>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <div class="number">8</div>
          <div class="card-name">Operations</div>
        </div>
        <div class="icon-box">
          <i class="fas fa-bed"></i>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <div class="numbers">$450</div>
          <div class="card-name">Earning</div>
        </div>
        <div class="icon-box">
          <i class="fas fa-dollar-sign"></i>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
