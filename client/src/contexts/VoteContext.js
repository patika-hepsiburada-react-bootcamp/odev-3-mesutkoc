import { createContext, useContext, useState } from "react";

const VoteContext = createContext();
//this part creates, votes context.
export const VoteProvider = ({ children }) => {
  const selections = [
    {
      name: "Cheeky Child",
      vote: 0,
    },
    {
      name: "Tormented Teenager",
      vote: 0,
    },
    {
      name: "Mad Mid Lifer",
      vote: 0,
    },
    {
      name: "Groovy Grandparent",
      vote: 0,
    },
    {
      name: "Something Else",
      vote: 0,
    },
  ];
  // create state for user vote.
  const [vote, setVote] = useState(selections);
  const values = {
    vote,
    setVote,
  };

  return <VoteContext.Provider value={values}>{children}</VoteContext.Provider>;
};

export const useVote = () => useContext(VoteContext);
