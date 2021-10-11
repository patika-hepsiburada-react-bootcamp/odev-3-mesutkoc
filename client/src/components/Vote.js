import React from "react";
import { useVote } from "../contexts/VoteContext";
import Radio from "./Radio";

//this component contains question and answer options.
function Vote() {
  const { vote } = useVote();
  return (
    <div className="vote">
      <div className="question">
        If age is only a state of mind, which category best describes your state
        of mind right now?
      </div>
      <div className="radioButtons">
        {vote.map((radio, index) => (
          <Radio values={radio} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Vote;
