const reducer = (state, action) => {
  if (action.type === "SET_LOADING") {
    return { ...state, isLoading: true, showAlert: false, editComplete: false };
  }

  if (action.type === "STORE_ITEMS") {
    return { ...state, isLoading: false };
  }

  if (action.type === "GET_ITEMS") {
    return { ...state, isLoading: false, items: action.payload };
  }

  if (action.type === "ADD_MEAL") {
    //set id to length in state.items array
    action.payload.id = state.items.length;
    return { ...state, items: [...state.items, action.payload] };
  }

  throw new Error(`no such action: ${action}`);
};

export default reducer;
