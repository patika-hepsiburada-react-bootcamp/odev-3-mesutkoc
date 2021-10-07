import { createContext, useContext, useState } from "react";

const VoteContext = createContext();

export const VoteProvider = ({ children }) => {
  const selections = [
    {
      name: "Windows",
      vote: 0,
    },
    {
      name: "MacOS",
      vote: 0,
    },
    {
      name: "A Linux Distro",
      vote: 0,
    },
    {
      name: "Something Else",
      vote: 0,
    },
  ];
  const [vote, setVote] = useState(selections);

  const values = {
    vote,
    setVote,
  };

  return <VoteContext.Provider value={values}>{children}</VoteContext.Provider>;
};

export const useVote = () => useContext(VoteContext);
