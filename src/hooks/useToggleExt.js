import { useReducer } from "react"

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE':
      const values = action.payload;
      const currentIndex = values.indexOf(state.value);
      const nextIndex = (currentIndex + 1) % values.length;
      return {
        value: values[nextIndex],
      };
    default:
      return state;
  }
};

export const useToggle = (initialValue = [true, false]) => {
  const [state, dispatch] = useReducer(reducer, {
    value: initialValue[0],
  });

  const toggle = () => {
    dispatch({ type: 'TOGGLE', payload: initialValue });
  };

  return [(state.value).toString(), toggle];
};
