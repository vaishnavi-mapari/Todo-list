import React, { useState } from 'react';  // Import useState
//import Logo from '../assets/logo.jpg'; // Use relative path to the `src/assets` directory

const NavBar = ({ setFilter }) => {
  // State to manage Dark Mode
  const [isDarkMode, setIsDarkMode] = useState(false);
 
  // State to manage Navbar color
  const [navbarColor, setNavbarColor] = useState('navbar-light bg-info');

  // Function to toggle Dark Mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? '#ffffff' : '#343a40'; // Change body background color
    document.body.style.color = isDarkMode ? '#000000' : '#ffffff'; // Change text color
  };

  // Function to change Navbar color to light blue
  const handleChangeColor = () => {
    setNavbarColor('navbar-light bg-primary');
  };

  return (
    <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark bg-dark' : navbarColor}`}>
      <div className="container-fluid">
        {/* Logo Section */}
        {/* <div className="flex items-center gap-3">
          <img src={Logo} alt="Todolist" className="h-16" />
          <p className="text-3xl font-bold">
            <i>Todolist</i>
          </p>
        </div> */}
        <div> <p className="text-3xl font-bold">
            <i>Todolist</i>
          </p></div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/Home">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="taskDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Task List
              </a>
              <ul className="dropdown-menu" aria-labelledby="taskDropdown">
                <li><a className="dropdown-item" href="#" onClick={() => setFilter('today')}>Today's Tasks</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => setFilter('yesterday')}>Yesterday's Tasks</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => setFilter('week')}>This Week's Tasks</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => setFilter('month')}>This Month's Tasks</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => setFilter('year')}>This Year's Tasks</a></li>
              </ul>
            </li>
            <button className="btn btn-outline-light ms-2">Login</button>
            <button className="btn btn-outline-light ms-2">Sign Up</button>
          </ul>
          {/* <button className="btn btn-outline-light ms-2">Login</button>
          <button className="btn btn-outline-light ms-2">Sign Up</button> */}
        </div>     
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div className="form-check form-switch mx-2">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onChange={toggleDarkMode}
            checked={isDarkMode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
