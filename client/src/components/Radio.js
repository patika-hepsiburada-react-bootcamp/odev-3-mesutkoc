import React from "react";
import { useVote } from "../contexts/VoteContext";
import { sendVote } from "../socketApi";
//this component contains radio component that create question options.
function Radio(radio) {
  //using vote context data.
  const { vote, setVote } = useVote();
  //send user vote
  const handleSubmit = (data) => {
    vote.filter((item) => item.name === data && (item.vote = item.vote + 1));
    sendVote("new-vote", [...vote]);
    setVote([...vote]);
  };
  return (
    <div className="radioButton">
      <input
        type="radio"
        name="vote"
        value={radio.values.name}
        className="vote-button"
        onClick={(e) => handleSubmit(e.target.value)}
      />
      <label>{radio.values.name}</label>
    </div>
  );
}
export default Radio;
