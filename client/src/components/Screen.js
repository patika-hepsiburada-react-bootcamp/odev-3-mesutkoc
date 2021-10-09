import Results from "./Results"
import Vote from "./Vote";
import { connectSocket, subscribeToNewVote } from "../socketApi";
import { useVote } from "../contexts/VoteContext";
import React, { useEffect } from "react";
import "./Screen.css"

function Screen() {
  const { setVote } = useVote();

  useEffect(() => {
    connectSocket();

    subscribeToNewVote((vote) => {
      // console.log(vote);
      setVote(vote);
    });
  }, [setVote]);
  return (
    <div className="displayScreen">
      <Results></Results>
      <Vote></Vote>
    </div>
  );
}

export default Screen;
