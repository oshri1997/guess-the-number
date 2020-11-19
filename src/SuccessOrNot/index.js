import { Button, Typography } from "@material-ui/core";
const successOrNot = (random, lastNumber, tryagain) => {
  if (Math.abs(random) - Math.abs(lastNumber) === 0)
    return (
      <div>
        <Typography color="secondary" variant="h5">
          You did it!
        </Typography>
        <Button
          onClick={tryagain}
          color="primary"
          variant="contained"
          style={{ marginTop: "10px" }}
        >
          Play Again!
        </Button>
      </div>
    );
  else if (Math.abs(random - lastNumber) <= 5) {
    return (
      <Typography color="error" variant="h5">
        You are very close!
      </Typography>
    );
  } else if (Math.abs(random - lastNumber) <= 10) {
    return (
      <Typography color="error" variant="h5">
        You're getting closer
      </Typography>
    );
  } else if (Math.abs(random - lastNumber) <= 15) {
    return (
      <Typography color="error" variant="h5">
        You are not even close!
      </Typography>
    );
  }
};
export default successOrNot;
