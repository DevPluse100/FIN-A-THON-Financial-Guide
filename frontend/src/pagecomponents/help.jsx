import React, { useState } from "react";
import "./help.css";

function HelpSection() {
  const [faqSearch, setFaqSearch] = useState("");
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { sender: "bot", message: "Hi! How can I help you today?" },
  ]);

  const faqs = [
    {
      question: "How do I reset my password?",
      answer: "You can reset your password by clicking on 'Forgot Password' on the login page.",
    },
    {
      question: "How do I contact support?",
      answer: "You can contact support via the 'Contact Us' page or email us at support@yourwebsite.com.",
    },
    {
      question: "Where can I find the documentation?",
      answer: "The documentation is available under the 'Resources' section of the website.",
    },
    {
      question: "How do I delete my account?",
      answer: "Please contact support to request account deletion.",
    },
  ];

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(faqSearch.toLowerCase())
  );

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (chatMessage.trim()) {
      const newChatHistory = [
        ...chatHistory,
        { sender: "user", message: chatMessage },
      ];
      setChatHistory(newChatHistory);
      setChatMessage("");

      // Simulate bot response
      setTimeout(() => {
        setChatHistory((prevHistory) => [
          ...prevHistory,
          {
            sender: "bot",
            message: "Thank you for your question! Our team will assist you shortly.",
          },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="help-section">
      <h1>Help Center</h1>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <input
          type="text"
          placeholder="Search FAQs..."
          value={faqSearch}
          onChange={(e) => setFaqSearch(e.target.value)}
        />
        <div className="faq-list">
          {filteredFaqs.length ? (
            filteredFaqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))
          ) : (
            <p>No FAQs match your search.</p>
          )}
        </div>
      </section>

      {/* Chat Widget Section */}
      <section className="chat-widget">
        <h2>Chat Support</h2>
         
        <div className="chat-history">
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              className={`chat-message ${
                chat.sender === "bot" ? "bot-message" : "user-message"
              }`}
            >
              {chat.message}
            </div>
          ))}
         

        </div>
        <form onSubmit={handleChatSubmit} className="chat-form">
          <input
            type="text"
            placeholder="Type your message..."
            value={chatMessage}
            onChange={(e) => setChatMessage(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </section>

      {/* Quick Links Section */}
      <section className="quick-links">
        <h2>Quick Links</h2>
        <ul>
          <li>
            <a href="/documentation" target="_blank" rel="noopener noreferrer">
              Documentation
            </a>
          </li>
          <li>
            <a href="/support-tickets" target="_blank" rel="noopener noreferrer">
              Submit a Support Ticket
            </a>
          </li>
          <li>
            <a href="/contact" target="_blank" rel="noopener noreferrer">
              Contact Us:67989654,99076546787
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default HelpSection;