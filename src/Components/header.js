import React from 'react';
import Switch from './swich';

function Header(){
    return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper">
          <div className="header-grid">
            <div>
              <h1>Social Media Dashboard</h1>
              <p className="header-total">Total Followers: {4621 + 52 + 44 + 15}</p>
            </div>
            <Switch></Switch>
          </div>
        </div>
      </header>
    </div>
    );
}
export default Header;