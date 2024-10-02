import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Header Component
function Header() {
  return (
    <header className="bg-light py-2 mb-0"> {/* Reduced padding and removed margin bottom */}
      <div className="container">
        <h1 className="text-center">Alpenfohn Black Ridge</h1>
      </div>
    </header>
  );
}

// Navbar Component
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom shadow p-3 mb-0"> {/* Added shadow and padding */}
      <a className="navbar-brand ms-3" href="#">Alpenfohn</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active ms-3" href="/">Home</a> {/* Marking Home as active */}
          </li>
          <li className="nav-item">
            <a className="nav-link ms-3" href="/about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link ms-3" href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

// Main App Component
function App() {
  return (
    <div>
      <Header /> {/* Header with reduced padding */}
      <Navbar />
      <div className="container mt-4">
        <h1>This is React</h1> {/* Home Content */}
      </div>
    </div>
  );
}

// Render App Component to the DOM
ReactDOM.render(<App />, document.getElementById('root'));