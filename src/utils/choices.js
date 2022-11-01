function choiceSelect(state, choice) {
  if (state.choices) {
    return Object.entries(state.choices[choice]).map((v) => ({
      text: v[1],
      value: v[0],
    }));
  }
}

export { choiceSelect };
