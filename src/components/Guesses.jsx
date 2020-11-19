import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

const Guesses = () => {
  const classes = useStyle();
  const attempts = useSelector((state) => state.attempts);
  return (
    <div>
      <Typography className={classes.guessesBar}>
        Guesses:{attempts.counter}
      </Typography>
      <ul className={classes.guessesHistory}>
        {attempts.numbers.map((number, i) => (
          <li className={classes.guessesHistoryItem} key={i}>
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

const useStyle = makeStyles(() => ({
  guessesBar: {
    marginTop: "25px",
    fontSize: "20px",
  },
  guessesHistory: {
    display: "flex",
    borderRadius: "4px",
    minHeight: "30px",
    padding: "5px",
    listStyle: "none",
    color: "#000",
    fontSize: "24px",
    flexWrap: "wrap",
  },
  guessesHistoryItem: {
    marginRight: "8px",
    padding: "2px",
    borderRadius: "4px",
    fontSize: "20px",
  },
}));

export default Guesses;
