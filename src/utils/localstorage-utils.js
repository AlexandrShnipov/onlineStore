export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('products');
    if (!serializedState) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('products', serializedState);
  } catch {
    // ignore write errors
  }
};