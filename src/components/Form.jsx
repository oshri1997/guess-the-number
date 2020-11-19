import React from "react";
import { TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { update } from "../actions";

const Form = () => {
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const guess = e.target.elements.guess.value;
    dispatch(update(guess));
    e.target.elements.guess.value = "";
  };
  return (
    <form style={{ marginTop: "20px" }} onSubmit={onSubmit}>
      <TextField
        style={{ paddingBottom: "20px" }}
        fullWidth
        focused
        type="number"
        name="guess"
        InputProps={{ inputProps: { min: 0, max: 20 } }}
        label="Enter your guess"
        required
      />
      <Button fullWidth variant="contained" color="primary" type="submit">
        Guess
      </Button>
    </form>
  );
};

export default Form;
