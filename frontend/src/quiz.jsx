import { useState } from 'react';
import './quiz.css'; // Import the CSS file

const Quiz = () => {
  const quizData = [
    {
      question: "What is a budget?",
      options: [
        "A plan for how to spend and save money",
        "A type of bank account",
        "A list of only your expenses",
        "A loan agreement"
      ],
      correct: 0
    },
    {
      question: "What does the term 'emergency fund' mean?",
      options: [
        "Money saved for unexpected expenses",
        "Money borrowed in case of emergencies",
        "A loan taken during a financial crisis",
        "A credit card limit for urgent needs"
      ],
      correct: 0
    },
    {
      question: "What is the recommended percentage of income to save monthly?",
      options: ["5%", "10%", "20%", "50%"],
      correct: 2
    },
    {
      question: "What is the purpose of a credit score?",
      options: [
        "To measure your income level",
        "To show how often you use cash",
        "To evaluate your creditworthiness for loans",
        "To track your investments"
      ],
      correct: 2
    },
    {
      question: "Which is an example of a good debt?",
      options: [
        "A loan for luxury items",
        "A payday loan",
        "A student loan",
        "A credit card balance not paid in full"
      ],
      correct: 2
    },
    {
      question: "What does 'compound interest' mean?",
      options: [
        "Interest earned only on the principal amount",
        "Interest earned on both the principal and previously earned interest",
        "A fixed amount of interest earned every year",
        "A penalty charged for late payments"
      ],
      correct: 1
    },
    {
      question: "Which of the following is considered a liability?",
      options: ["A savings account", "A car loan", "A house owned outright", "An emergency fund"],
      correct: 1
    },
    {
      question: "What is the difference between a debit card and a credit card?",
      options: [
        "A debit card uses borrowed money, and a credit card uses your savings",
        "A debit card is linked to your bank account, while a credit card borrows money",
        "A debit card builds credit scores, while a credit card does not",
        "There is no difference"
      ],
      correct: 1
    },
    {
      question: "What is financial literacy?",
      options: [
        "The ability to read financial books",
        "The understanding of how to manage money effectively",
        "The skill to calculate interest quickly",
        "The knowledge of stock market trends"
      ],
      correct: 1
    },
    {
      question: "What does 'pay yourself first' mean?",
      options: [
        "Spend your income on yourself before paying bills",
        "Save a portion of your income before spending",
        "Pay off your loans before saving",
        "Invest in the stock market first"
      ],
      correct: 1
    }
  ];

  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score, setScore] = useState(null);

  const handleOptionChange = (questionIndex, selectedOption) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[questionIndex] = selectedOption;
    setSelectedAnswers(newAnswers);
  };

  const submitQuiz = () => {
    let currentScore = 0;
    quizData.forEach((item, index) => {
      if (selectedAnswers[index] === item.correct) {
        currentScore++;
      }
    });
    setScore(currentScore);
  };

  return (
    <div className="quiz-container">
      <h1>Personal Finance Quiz</h1>
      <div id="quiz">
        {quizData.map((item, index) => (
          <div className="question" key={index}>
            <p>{index + 1}. {item.question}</p>
            <div className="options">
              {item.options.map((option, i) => (
                <label key={i}>
                  <input
                    type="radio"
                    name={`question${index}`}
                    value={i}
                    checked={selectedAnswers[index] === i}
                    onChange={() => handleOptionChange(index, i)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button onClick={submitQuiz}>Submit</button>
      {score !== null && (
        <div className="result">
          You scored {score} out of {quizData.length}!
        </div>
      )}
    </div>
  );
};

export default Quiz;
