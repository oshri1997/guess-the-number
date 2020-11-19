const initialiseState = {
  counter: 0,
  numbers: [],
};

export default (state = initialiseState, action) => {
  switch (action.type) {
    case "UPDATE":
      return {
        counter: state.counter + 1,
        numbers: [...state.numbers, action.payload],
      };
    case "RESET":
      return initialiseState;

    default:
      return state;
  }
};
