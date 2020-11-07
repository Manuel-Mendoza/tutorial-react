import React from 'react';
import totalfollow from "./DataBase/total_follow"

function Header({children}){
    return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper">
          <div className="header-grid">
            <div>
              <h1>Social Media Dashboard</h1>
              <p className="header-total">Total Followers:{totalfollow} </p>
            </div>
            {children}
          </div>
        </div>
      </header>
    </div>
    );
  }
 export default Header;