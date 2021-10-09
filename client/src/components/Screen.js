import Results from "./Results"
import Vote from "./Vote";
import { connectSocket, subscribeToNewVote } from "../socketApi";
import { useVote } from "../contexts/VoteContext";
import React,{useEffect} from "react";

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
    <div>
      <Results></Results>
      <Vote></Vote>
    </div>
  );
}

export default Screen;
