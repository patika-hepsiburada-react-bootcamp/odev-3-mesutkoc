import React from "react";

function Total(item) {
  return (
    <div className="total">
      <p>{item.values.name}</p>
      <span className="totalPercent">{((item.values.vote*100)/item.totalVotes).toFixed(1)}%</span>
    </div>
  );
}

export default Total;
