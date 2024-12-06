import { Link } from "react-router-dom";
import "./landing.css"; // CSS for styling

export default function LandingPage() {
  return (
    <div className="home">
      {/* Header Section */}
      <header className="header">
        <div className="logo-container">
          <h1>Money Mastery</h1>
        </div>
        <nav className="header-navbar">
          <Link to="/home" className="navbar-item">Home</Link>
          <Link to="/login" className="navbar-item">Login</Link>
          <Link to="/register" className="navbar-item">Register</Link>
          <Link to="/about-us" className="navbar-item">About Us</Link>
          <Link to="/help" className="navbar-item">Help</Link>
        </nav>
      </header>

      {/* Logo Section */}
      <img src="src/assets/logo.png" alt="Logo" className="logo" />

      {/* Main Content Section */}
      
    </div>
  );
}
