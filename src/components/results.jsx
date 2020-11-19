import React, { useState } from "react";
import { Box } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../actions";
import successOrNot from "../SuccessOrNot";
import { randomNumber } from "../RandomNumber";

const Results = () => {
  const [random, setRandom] = useState(randomNumber());
  const numbers = useSelector((state) => state.attempts.numbers);
  let lastNumber = numbers[numbers.length - 1];

  const dispatch = useDispatch();
  const playAgain = () => {
    dispatch(reset());
    setRandom(randomNumber());
  };

  return numbers.length ? (
    <Box display="flex" justifyContent="center">
      {successOrNot(random, lastNumber, playAgain)}
    </Box>
  ) : null;
};

export default Results;
