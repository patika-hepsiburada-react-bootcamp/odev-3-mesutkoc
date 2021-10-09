import React from "react";
import { useVote } from "../contexts/VoteContext";
import Radio from "./Radio";

function Vote() {
  const { vote } = useVote();
  return (
    <div className="vote">
      <div className="question">Choose best OS.</div>
      <div className="radioButtons">
        {vote.map((radio, index) => (
          <Radio values={radio} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Vote;
