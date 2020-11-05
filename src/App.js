
import "./asset/Css/styles.css";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper">
          <div className="header-grid">
            <div>
              <h1>Social Media Dashboard</h1>
              <p className="header-total">Total Followers: 23,004</p>
            </div>
            <div className="dark-mode">
              <p className="dark-mode-title">Dark Mode</p>
              <input type="checkbox" className="checkbox" id="checkbox"/>
              <label className="switch" for="checkbox"></label>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
