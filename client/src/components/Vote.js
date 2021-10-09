import React from "react";
import { useVote } from "../contexts/VoteContext";
import { sendVote} from "../socketApi";

function Vote() {
  const { vote, setVote } = useVote();

  const handleSubmit = (data) => {
    vote.filter((item) => item.name === data && (item.vote = item.vote + 1));
    sendVote("new-vote", [...vote]);
    setVote([...vote]);
  };

  return (
    <div>
      <input
        type="button"
        value="Windows"
        className="vote-button"
        onClick={(e) => handleSubmit(e.target.value)}
      />
      <input
        type="button"
        value="MacOS"
        className="vote-button"
        onClick={(e) => handleSubmit(e.target.value)}
      />
      <input
        type="button"
        value="A Linux Distro"
        className="vote-button"
        onClick={(e) => handleSubmit(e.target.value)}
      />
      <input
        type="button"
        value="Something Else"
        className="vote-button"
        onClick={(e) => handleSubmit(e.target.value)}
      />
    </div>
  );
}

export default Vote;
