import React, { useState } from "react";
import "./game.css"; 

const PizzaChefGame = () => {
  const [budget, setBudget] = useState(15000);
  const [savings, setSavings] = useState(0);
  const [message, setMessage] = useState("");
  const [eventText, setEventText] = useState("Welcome! Click 'Start Game' to begin.");
  const [currentEvent, setCurrentEvent] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const events = [
    { text: "Buy fancy mozzarella for ₹2,000 to impress food critics?", cost: 2000 },
    { text: "A rival chef offers to sell a secret recipe for ₹3,500. Buy it?", cost: 3500 },
    { text: "A loyal customer tips you ₹1,000. Add it to savings?", cost: -1000 },
    { text: "Broken freezer repair costs ₹5,000. Fix it?", cost: 5000 },
    { text: "Sell an exclusive pizza recipe for ₹5,000. Add it to savings?", cost: -5000 },
    { text: "Hire a new pizza delivery driver for ₹2,500. Do you want to hire?", cost: 2500 },
    { text: "A local food blogger reviews your pizza and gives it 5 stars! Customers flock to your shop. Earn ₹3,000. Add it to savings?", cost: -3000 },
    { text: "The restaurant’s air conditioning breaks down. Repair cost ₹1,500. Pay?", cost: 1500 },
    { text: "A customer orders a bulk pizza order for a wedding. You earn ₹8,000. Add it to savings?", cost: -8000 },
    { text: "The pizza dough supplier offers a discount of ₹1,000. Buy more dough?", cost: 1000 },
    { text: "Unexpected health inspection fines you ₹2,500 for minor violations. Pay the fine?", cost: 2500 },
    { text: "You offer a special pizza promotion for ₹500. Earn ₹2,000 in return. Add it to savings?", cost: -500 },
    { text: "You decide to upgrade your restaurant’s ambiance with new furniture. Cost ₹7,000. Do it?", cost: 7000 },
    { text: "The pizza delivery truck breaks down. Repair cost ₹4,000. Fix it?", cost: 4000 },
    { text: "A local event organizer requests your pizza for an event and offers you ₹10,000. Accept the offer?", cost: -10000 },
  ];

  const startGame = () => {
    setMessage("");
    setEventText("Get ready! Your first challenge is coming up.");
    nextEvent();
    setGameOver(false);
  };

  const nextEvent = () => {
    const randomEvent = events[Math.floor(Math.random() * events.length)];
    setCurrentEvent(randomEvent);
    setEventText(randomEvent.text);
  };

  const handleEvent = (choice) => {
    if (!currentEvent) return;

    const { cost } = currentEvent;

    if (choice) {
      if (cost < 0) {
        setSavings((prevSavings) => prevSavings + Math.abs(cost));
        setMessage("Great! You added money to the piggy bank.");
      } else if (budget >= cost) {
        setBudget((prevBudget) => prevBudget - cost);
        setMessage("You spent ₹${cost}. Hope it pays off!");
      } else {
        setMessage("Oops! Not enough money in the budget.");
      }
    } else {
      setMessage("You skipped this expense.");
    }

    updateGameStatus();
  };

  const updateGameStatus = () => {
    if (savings >= 10000) {
      setMessage("Congratulations! You saved ₹10,000 for the new pizza oven!");
      setGameOver(true);
    } else if (budget <= 0) {
      setMessage("Oh no! Your restaurant is bankrupt!");
      setGameOver(true);
    } else {
      nextEvent();
    }
  };

  const resetGame = () => {
    setBudget(15000);
    setSavings(0);
    setMessage("");
    setEventText("Welcome! Click 'Start Game' to begin.");
    setCurrentEvent(null);
    setGameOver(false);
  };

  return (
    <div className="game-container">
      <h1>Pizza Chef's Piggy Bank Adventure</h1>
      <p id="intro">Help the pizza chef save ₹10,000 for a new pizza oven!</p>

      <div id="budget-info">
        <p>Restaurant Budget: ₹{budget}</p>
        <p>Piggy Bank Savings: ₹{savings}</p>
      </div>

      <div id="event">
        <p id="event-text">{eventText}</p>
        <button onClick={() => handleEvent(true)} disabled={!currentEvent || gameOver}>
          Yes
        </button>
        <button onClick={() => handleEvent(false)} disabled={!currentEvent || gameOver}>
          No
        </button>
        <button onClick={startGame} disabled={!gameOver && currentEvent}>
          Start Game
        </button>
        <button onClick={resetGame} style={{ marginLeft: "10px" }}>
          Reset Game
        </button>
      </div>

      <p id="message">{message}</p>
    </div>
  );
};

export default PizzaChefGame;