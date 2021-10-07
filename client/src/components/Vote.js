import React, { useEffect } from "react";
import { useVote } from "../contexts/VoteContext";
import { sendVote, connectSocket, subscribeToNewVote } from "../socketApi";

function Vote() {
  const { vote, setVote } = useVote();
  
  useEffect(() => {
    connectSocket();

    subscribeToNewVote((vote) => {
      console.log(vote);
      setVote(vote);
    });
  }, []);

  const handleSubmit = (data) => {
    console.log(data)
    
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