import React from "react";
import { useVote } from "../contexts/VoteContext";
import {Pie} from "react-chartjs-2"

//this component contains votes results and chart.
function Results() {
  //getting vote count and set chart values as label-votes  
  const { vote } = useVote();
  const labels = vote.map(item => item.name)
  const votes = vote.map((item) => item.vote);
  // dataset contains chart values.
  const dataset = {
    labels: labels,
    datasets: [
      {
        label: "Votes",
        backgroundColor: [
          "#FF6347",
          "#90EE90",
          "#87CEFA",
          "#F5FFFA",
          "#800080",
        ],
        borderColor: "#FF4500",
        borderWidth: 1,
        data: votes,
      },
    ],
  };
  return (
    <div className="results">
      <div>
        <Pie className="bar"
          data={dataset}
          options={{
            title: {
              display: true,
              text: "Voting rate",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
    </div>
  );
}

export default Results;
