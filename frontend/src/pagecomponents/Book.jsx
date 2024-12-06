
import PropTypes from 'prop-types';  // Import PropTypes
import "./Book.css";  // Make sure this CSS file is correctly imported

const FinanceStories = () => {
  return (
    <div className="finance-stories-body">
      {/* Header */}
      <header className="finance-stories-header">
        <h1 style={{ color: "white" }}>Finance Stories</h1>
        <p>Click on a story below to navigate directly to it.</p>
      </header>

      {/* Navigation */}
      <nav className="finance-stories-nav">
        <ul className="finance-stories-list">
          <li><a href="/home/ebook/e1">The Budget Miracle: A Household Journey to Stability</a></li>
          <li><a href="/home/ebook/e2">Rahul Crash Course in Credit</a></li>
          <li><a href="#story3">A 12-Year-Old Entrepreneur Lemonade Stand</a></li>
          <li><a href="#story4">Financial Freedom at 30: Sanjay Story</a></li>
          <li><a href="#story5">Asha Dream of Higher Education</a></li>
          <li><a href="#story6">From Savings to Success: The Story of Ravi Family</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="finance-stories-main">
        <Article 
          id="story1"
          title="The Budget Miracle: A Household's Journey to Stability"
          content="Meera, a schoolteacher from a rural town, struggled to manage her family’s expenses..."
        />
        <Article 
          id="story2"
          title="Rahul's Crash Course in Credit"
          content="At 21, Rahul got his first job in an IT firm. Excited by his newfound independence..."
        />
        <Article 
          id="story3"
          title="A 12-Year-Old Entrepreneur's Lemonade Stand"
          content="Aditi, a 12-year-old, loved making lemonade during summer. Her parents suggested..."
        />
        <Article 
          id="story4"
          title="Financial Freedom at 30: Sanjay's Story"
          content="Sanjay, a 30-year-old software engineer, lived paycheck to paycheck despite..."
        />
        <Article 
          id="story5"
          title="Asha's Dream of Higher Education"
          content="Asha, a 16-year-old from a small village, dreamed of studying computer science..."
        />
        <Article 
          id="story6"
          title="From Savings to Success: The Story of Ravi's Family"
          content="Ravi, a farmer, often struggled to save money due to irregular income and..."
        />
      </main>

      {/* Footer */}
      <footer className="finance-stories-footer">
        <p>&copy; 2024 Finance Stories. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Article Component
const Article = ({ id, title, content }) => {
  return (
    <article id={id} className="finance-stories-article">
      <h2>{title}</h2>
      <p>{content}</p>
    </article>
  );
};

// Adding PropTypes validation for the Article component
Article.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default FinanceStories;

