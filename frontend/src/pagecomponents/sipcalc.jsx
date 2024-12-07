import  { useState } from "react";
import "./sipcal.css";

const SIPCalculator = () => {
    const [monthlyInvestment, setMonthlyInvestment] = useState(25000);
    const [interestRate, setInterestRate] = useState(14.3);
    const [timePeriod, setTimePeriod] = useState(16);
    const [result, setResult] = useState(null);

    const calculateSIP = () => {
        const annualRate = interestRate / 100;
        const months = timePeriod * 12;
        const monthlyRate = annualRate / 12;

        const totalValue =
            monthlyInvestment *
            ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
            (1 + monthlyRate);
        const investedAmount = monthlyInvestment * months;
        const estReturns = totalValue - investedAmount;

        setResult({
            investedAmount: investedAmount.toFixed(2),
            estReturns: estReturns.toFixed(2),
            totalValue: totalValue.toFixed(2),
        });
    };

    return (
        <div className="container">
            <h1>SIP Calculator</h1>
            <div className="slider-container">
                <label htmlFor="monthlyInvestment">
                    Monthly Investment (₹):{" "}
                    <span id="investment-value">{monthlyInvestment}</span>
                </label>
                <input
                    type="range"
                    id="monthlyInvestment"
                    name="monthlyInvestment"
                    min="1000"
                    max="100000"
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(e.target.value)}
                />
            </div>

            <div className="slider-container">
                <label htmlFor="interestRate">
                    Expected Return Rate (p.a.) (%):{" "}
                    <span id="rate-value">{interestRate}</span>
                </label>
                <input
                    type="range"
                    id="interestRate"
                    name="interestRate"
                    min="1"
                    max="20"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                />
            </div>

            <div className="slider-container">
                <label htmlFor="timePeriod">
                    Time Period (Years):{" "}
                    <span id="time-value">{timePeriod}</span>
                </label>
                <input
                    type="range"
                    id="timePeriod"
                    name="timePeriod"
                    min="1"
                    max="30"
                    value={timePeriod}
                    onChange={(e) => setTimePeriod(e.target.value)}
                />
            </div>

            <button onClick={calculateSIP}>Calculate</button>

            {result && (
                <div className="results">
                    <h2>Results</h2>
                    <p>Invested Amount: ₹{result.investedAmount}</p>
                    <p>Estimated Returns: ₹{result.estReturns}</p>
                    <p>Total Value: ₹{result.totalValue}</p>
                </div>
            )}
        </div>
    );
};

export default SIPCalculator;