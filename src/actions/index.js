export const update = (number) => {
  return { type: "UPDATE", payload: number };
};

export const reset = () => {
  return { type: "RESET", payload: 0 };
};
