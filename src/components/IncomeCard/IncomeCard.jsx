import "./IncomeCard.css";

const IncomeCard = ({ title, amount, sub, highlight, color }) => {
  return (
    <div className={`income-card ${color === "yellow" ? "highlight" : ""}`}>
      <div className="card-header">
        <h4>{title}</h4>
        <span className="highlight-text">{highlight}</span>
      </div>
      <h2>{amount}</h2>
      <p>{sub}</p>
    </div>
  );
};

export default IncomeCard;
