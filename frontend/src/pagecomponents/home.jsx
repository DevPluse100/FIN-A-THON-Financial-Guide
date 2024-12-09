import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./home.css";

const Home = () => {
  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear the token
    console.log("Logged out");
    window.location.href = "/";
    //window.location.href = "/login"; // Redirect to the login page
  };

  return (
    <div className="home1">
      {/* Navbar */}
      <header className="main-navbar">
        <div>
          <h1 className="logo" style={{color:"white", paddingTop:"1.7rem"}}>Money Mastery</h1>
        </div>
        <div className="navbar-right">
          <Link to="/home" className="navbar-item">Home</Link>
          <Link to="/home/quiz" className="navbar-item">Quiz</Link>
          <Link to="/home/mentor" className="navbar-item">Mentor</Link>
          <Link to="/home/ebook" className="navbar-item">eBook</Link>
          Search<input
            type="text"
            className="navbar-search"
            placeholder="Search..."
          />
          <button onClick={handleLogout} className="navbar-logout">Logout</button>
        </div>
      </header>

      {/* Content Area */}
      <div className="content">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="profile">
            <div className="profile-icon">👤</div>
            <p className="profile-name">John Doe</p>
          </div>
          <ul className="menu">
            <li>
              <NavLink to="/home/accounts" className={({ isActive }) => (isActive ? "active" : "")}>
                Accounts
              </NavLink>
            </li>
            <li>
              <NavLink to="/home/agriculture" className={({ isActive }) => (isActive ? "active" : "")}>
                Agriculture
              </NavLink>
            </li>
            <li>
              <NavLink to="/home/family" className={({ isActive }) => (isActive ? "active" : "")}>
                Family
              </NavLink>
            </li>
            <li>
              <NavLink to="/home/health" className={({ isActive }) => (isActive ? "active" : "")}>
                Health
              </NavLink>
            </li>
            <li>
              <NavLink to="/home/calculator" className={({ isActive }) => (isActive ? "active" : "")}>
                Calculator
              </NavLink>
            </li>
            <li>
              <NavLink to="/home/services" className={({ isActive }) => (isActive ? "active" : "")}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/home/refer" className={({ isActive }) => (isActive ? "active" : "")}>
                Refer and Earn
              </NavLink>
            </li>
            <li>
              <NavLink to="/home/rewards" className={({ isActive }) => (isActive ? "active" : "")}>
                Rewards
              </NavLink>
            </li>
          </ul>
        </aside>

        <main className="main-content">
  {/* Article 1 */}
  <div className="article-section">
    <h2 className="article-title">The Art of Financial Literacy</h2>
    <img
      src="https://media.istockphoto.com/id/1372336229/vector/financial-literacy-and-education-with-learning-from-books-tiny-person-concept.jpg?s=612x612&w=0&k=20&c=pucvpl0uUbkUkpZDEkNYVIrFFPnDnQWX6gyHjnBiMRM="
      alt="Financial Literacy"
      className="article-image"
    />
    <p className="article-content">
      Financial literacy empowers individuals to make informed decisions about their finances. It encompasses budgeting, saving, investing, and managing debt effectively.
    </p>
    <a
      href="https://www.investopedia.com/terms/f/financial-literacy.asp"
      target="_blank"
      rel="noopener noreferrer"
      className="article-link"
    >
      Read more on Investopedia
    </a>
  </div>

  {/* Article 2 */}
  <div className="article-section">
    <h2 className="article-title">Building a Financial Plan</h2>
    <img
      src="https://www.corporatevision-news.com/wp-content/uploads/2022/01/Financial-Plan.jpg"
      alt="Financial Plan"
      className="article-image"
    />
    <p className="article-content">
      A strong financial plan balances income, expenses, and future goals. It's key to achieving financial stability and success.
    </p>
    <a
      href="https://www.nerdwallet.com/article/finance/how-to-make-a-financial-plan"
      target="_blank"
      rel="noopener noreferrer"
      className="article-link"
    >
      Read more on NerdWallet
    </a>
  </div>

  {/* Article 3 */}
  <div className="article-section">
    <h2 className="article-title">Investing for Beginners</h2>
    <img
      src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/201806/pixabay1%2B660_061118073914.jpg?size=948:533"
      alt="Investing"
      className="article-image"
    />
    <p className="article-content">
      Start investing with simple options like mutual funds or ETFs. Diversify your portfolio to manage risks effectively.
    </p>
    <a
      href="https://www.thebalance.com/investing-101-5186452"
      target="_blank"
      rel="noopener noreferrer"
      className="article-link"
    >
      Read more on The Balance
    </a>
  </div>

  {/* Article 4 */}
  <div className="article-section">
    <h2 className="article-title">Understanding Credit Scores</h2>
    <img
      src="https://appreciatewealth.com/blog/wp-content/uploads/2023/10/WHAT-IS-DEMAT-ACCOUNT-2-1024x577.png"
      alt="Credit Scores"
      className="article-image"
    />
    <p className="article-content">
      Maintaining a good credit score ensures access to loans with favorable terms. Manage debts wisely and check your score regularly.
    </p>
    <a
      href="https://www.creditkarma.com/advice/i/what-is-a-credit-score"
      target="_blank"
      rel="noopener noreferrer"
      className="article-link"
    >
      Read more on Credit Karma
    </a>
  </div>
</main>


      </div>
    </div>
  );
};

export default Home;
