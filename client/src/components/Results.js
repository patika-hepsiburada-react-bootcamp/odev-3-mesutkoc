import React from "react";
import { useVote } from "../contexts/VoteContext";

function Results() {
  const { vote } = useVote();

  return (
    <div>
      <h1>Results</h1>
      <div>
        <p>
          {vote.map((item, index) => (
            <span key={index}>
              {item.name} {item.vote}<br/>
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default Results;
