import Results from "./Results";
import Vote from "./Vote";
import TotalPanel from "./TotalPanel";
import { connectSocket, subscribeToNewVote } from "../socketApi";
import { useVote } from "../contexts/VoteContext";
import React, { useEffect } from "react";
import "./Screen.css";

function Screen() {
  const { setVote } = useVote();
  useEffect(() => {
    connectSocket();

    subscribeToNewVote((vote) => {
      setVote(vote);
    });
  }, [setVote]);
  return (
    <div className="displayScreen">
      <div className="mainPage">
        <Results></Results>
        <TotalPanel></TotalPanel>
        <Vote></Vote>
      </div>
    </div>
  );
}

export default Screen;
