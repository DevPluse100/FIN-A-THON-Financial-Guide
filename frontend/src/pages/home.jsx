import { useState } from "react";
import { Link } from "react-router-dom";  // Ensure Link is imported
import "../pages/home.css";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: "/photo1.png", url: "https://example.com/page1" },
    { image: "/photo2.jpg", url: "https://example.com/page2" },
    { image: "/photo3.jpeg", url: "https://example.com/page3" },
    { image: "/photo4.avif", url: "https://example.com/page4" },
    { image: "/photo5.jpg", url: "https://example.com/page5" },
    { image: "/photo6.jpeg", url: "https://example.com/page6" },
  ];

  const handleLogout = () => {
    console.log("Logging out...");
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="home1">
      <header className="main-navbar">
        <div>
          <h1 style={{ color: "white" }}> Money Mastery</h1>
        </div>
        <div className="navbar-right">
          <Link to="/home" className="navbar-item">Home</Link>  {/* Home page */}
          <Link to="/home/quiz" className="navbar-item">Quiz</Link>  {/* Link to quiz */}
          <Link to="/help" className="navbar-item">Mentor</Link>  {/* Help page */}
          <Link to="/home/ebook" className="navbar-item">eBook</Link>  {/* Login page */}
          {/* <Link to="/register" className="navbar-item">Register</Link>  Register page */}
          Search <input
            type="text"
            className="navbar-search"
            placeholder="Search..."
          />
          <button onClick={handleLogout} className="navbar-logout">Logout</button>
        </div>
      </header>

      <div className="content">
        <aside className="sidebar">
          <div className="profile">
            <div className="profile-icon">👤</div>
            <p className="profile-name">Profile</p>
          </div>
          <ul className="menu">
            <li>Accounts</li>
            <li>Agriculture</li>
            <li>Family</li>
            <li>Health</li>
            <li>Calculator</li>
            <li>Services</li>
            <li>Refer and earn</li>
            <li>Rewards</li>
          </ul>
        </aside>

        <main className="main-content">
          <div className="slideshow">
            <a href={slides[currentSlide].url} className="slide">
              <img
                src={slides[currentSlide].image}
                alt={`Slide ${currentSlide + 1}`}
                className="slide-image"
              />
            </a>
          </div>

          <div className="slide-controls">
            <button onClick={prevSlide} className="slide-button">Previous</button>
            <button onClick={nextSlide} className="slide-button">Next</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
