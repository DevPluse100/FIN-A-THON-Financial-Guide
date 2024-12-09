import React from "react";
import "./Service.css";

const services = [
  {
    title: "1. Personal Finance Management",
    features: [
      "Expense Tracking",
      "Budgeting Tools",
      "Savings Recommendations",
      "Net Worth Calculators",
    ],
  },
  {
    title: "2. Investment & Wealth Management",
    features: [
      "Portfolio Management",
      "Stock Market Insights",
      "Robo-Advisory Services",
      "Mutual Funds and ETFs",
    ],
  },
  {
    title: "3. Credit & Loan Management",
    features: [
      "Credit Score Monitoring",
      "Loan Comparison Tools",
      "EMI Calculators",
      "Debt Management Solutions",
    ],
  },
  {
    title: "4. Financial Literacy & Education",
    features: ["Blogs & Articles", "Courses & Webinars", "Quizzes & Tools"],
  },
  {
    title: "5. Banking & Payments",
    features: [
      "Online Banking",
      "Payment Gateways",
      "Bank Account Management",
    ],
  },
  {
    title: "6. Tax Planning & Filing",
    features: [
      "Tax Calculators",
      "Filing Assistance",
      "Tax-Saving Investment Suggestions",
    ],
  },
  {
    title: "7. Insurance",
    features: ["Policy Comparison", "Premium Calculators", "Claim Assistance"],
  },
  {
    title: "8. Retirement Planning",
    features: [
      "Pension Calculators",
      "Retirement Accounts Management",
      "Annuity Planning",
    ],
  },
  {
    title: "9. Cryptocurrency & Blockchain",
    features: [
      "Crypto Trading Platforms",
      "Market News & Analysis",
      "Wallet Management",
    ],
  },
  {
    title: "10. Business Financial Services",
    features: [
      "Accounting Software",
      "Small Business Loans",
      "Payroll Management",
    ],
  },
  {
    title: "11. Specialized Services",
    features: ["Estate Planning", "Microloans", "Crowdfunding"],
  },
];

const Services = () => {
  return (
    <div>
      <header>
        <h1>Services Offered by Finance Websites</h1>
      </header>
      <main>
        {/* <section className="services" style={{marginTop:"15rem"}}>
          {services.map((service, index) => (
            <article className="service" key={index}>
              <h2>{service.title}</h2>
              <ul>
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </section> */}
        <section className="services" style={{ marginTop: "15rem", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", padding: "20px" }}>
  {services.map((service, index) => (
    <article
      className="service"
      key={index}
      style={{
        background: "linear-gradient(145deg, #ffffff, #f0f0f0)",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        width: "300px",
        padding: "20px",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
      }}
    >
      <h2 style={{ fontSize: "20px", color: "#333", marginBottom: "10px" }}>
        {service.title}
      </h2>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
        {service.features.map((feature, i) => (
          <li key={i} style={{ fontSize: "14px", margin: "8px 0", color: "#555" }}>
            {feature}
          </li>
        ))}
      </ul>
    </article>
  ))}
</section>

      </main>
    </div>
  );
};

export default Services;