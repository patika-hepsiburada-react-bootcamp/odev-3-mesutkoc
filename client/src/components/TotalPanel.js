import React from "react";
import Total from "./Total";
import { useVote } from "../contexts/VoteContext";

function TotalPanel() {
  const { vote } = useVote();
  const totalVotes = vote.reduce((first, second) => first + second.vote, 0);
  return (
    <div className="totalVotes">
      <div className="total">
        <h3>Total Votes</h3>
        <span className="totalPercent">{totalVotes}</span>
      </div>
      {vote.map((item, index) => (
        <Total values={item} totalVotes={totalVotes} key={index}></Total>
      ))}
    </div>
  );
}

export default TotalPanel;
