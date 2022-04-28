const reducer = (state, action) => {
  if (action.type === "SET_LOADING") {
    return { ...state, isLoading: true, showAlert: false, editComplete: false };
  }

  if (action.type === "SET_STORAGE") {
    const storedItems = JSON.parse(localStorage.getItem("items"));
    if (!storedItems) {
      localStorage.setItem("items", JSON.stringify([]));
    } else {
      return {
        ...state,
        items: storedItems,
        initStorage: true,
        isLoading: false,
      };
    }
    return { ...state, initStorage: true, isLoading: false };
  }

  if (action.type === "SAVE_STATE") {
    localStorage.setItem("items", JSON.stringify(state.items));
    return { ...state };
  }

  if (action.type === "STORE_ITEM") {
    return { ...state, isLoading: false };
  }

  if (action.type === "SET_CURRENT_ITEM") {
    const currentItem = state.items.find(({ id }) => id === action.payload);

    return { ...state, currentItem };
  }

  if (action.type === "CLEAR_CURRENT_ITEM") {
    return { ...state, currentItem: null };
  }

  if (action.type === "ADD_MEAL") {
    //gen random id, define on meal payload
    const random = Math.trunc(Math.random() * 10000);
    action.payload.id = action.payload.meal[0] + random;
    return { ...state, items: [...state.items, action.payload] };
  }

  if (action.type === "COUNT_CALS") {
    let cals = 0;
    state.items.forEach((item) => {
      cals += item.calories;
    });

    return { ...state, totalCalories: cals };
  }

  throw new Error(`no such action: ${action}`);
};

export default reducer;
