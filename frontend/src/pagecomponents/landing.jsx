import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import "./landing.css";

export default function LandingPage() {
  return (
    <div className="home">
      {/* Header Section */}
      <header className="header">
        <div className="logo-container">
          <h1 className="heading">
            <FontAwesomeIcon icon={faWallet} />
            Money Mastery
          </h1>
        </div>
        <nav className="header-navbar">
          <Link to="/home" className="navbar-item">Home</Link>
          <Link to="/login" className="navbar-item">Login</Link>
          <Link to="/register" className="navbar-item">Register</Link>
          <Link to="/about-us" className="navbar-item">About Us</Link>
          <Link to="/help" className="navbar-item">Help</Link>
        </nav>
      </header>

      {/* Main Content Section */}
      <div className="landingMainContainer">
        <h1>Take Control of Your Finances</h1>
        <p>Manage your budget, track expenses, and plan for the future with Money Mastery.</p>
        <Link to="/register" className="cta-button">Get Started</Link>
      </div>
    </div>
  );
}

// import React from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWallet } from '@fortawesome/free-solid-svg-icons';
// import "./landing.css";

// export default function LandingPage() {
//   return (
//     <div className="home">
//       {/* Header Section */}
//       <header className="header">
//         <div className="logo-container">
        
//           <h1 className="heading"><FontAwesomeIcon icon={faWallet} />Money Mastery</h1>
//         </div>
//         <nav className="header-navbar">
//           <Link to="/home" className="navbar-item">Home</Link>
//           <Link to="/login" className="navbar-item">Login</Link>
//           <Link to="/register" className="navbar-item">Register</Link>
//           <Link to="/about-us" className="navbar-item">About Us</Link>
//           <Link to="/help" className="navbar-item">Help</Link>
//         </nav>
//       </header>

//       {/* Main Content Section */}
//       <div className="landingMainContainer">
//         <h1>Take Control of Your Finances</h1>
//         <p>Manage your budget, track expenses, and plan for the future with Money Mastery.</p>
//         <Link to="/register" className="cta-button">Get Started</Link>
//       </div>
//     </div>
//   );
// }

