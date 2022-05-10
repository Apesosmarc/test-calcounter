import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

const initialState = {
  items: [],
  currentItem: null,
  totalCalories: 0,
  isLoading: false,
  initStorage: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };

  const setStorage = () => {
    setLoading();
    dispatch({ type: "SET_STORAGE" });
  };

  const storeItem = (items) => {
    localStorage.setItem("items", JSON.stringify(items));
    dispatch({ type: "STORE_ITEM", payload: items });
  };

  const setCurrentItem = (itemId) => {
    dispatch({ type: "SET_CURRENT_ITEM", payload: itemId });
  };

  const clearCurrentItem = () => {
    dispatch({ type: "CLEAR_CURRENT_ITEM" });
  };

  const deleteItem = (itemId) => {
    dispatch({ type: "DELETE_ITEM", payload: itemId });
    dispatch({ type: "SAVE_STATE" });
    dispatch({ type: "CLEAR_CURRENT_ITEM" });
  };

  const updateItem = (formVal) => {
    dispatch({ type: "UPDATE_ITEM", payload: formVal });
    dispatch({ type: "SAVE_STATE" });
    dispatch({ type: "CLEAR_CURRENT_ITEM" });
  };

  // set default empty str to meal entry + cals = 0
  const addMeal = ({ meal = "", calories = 0 }) => {
    if (meal.trim() === "") return;
    const numCals = Math.trunc(parseInt(calories));
    dispatch({ type: "ADD_MEAL", payload: { meal, calories: numCals } });
    dispatch({ type: "SAVE_STATE" });
  };

  const deleteAll = () => {
    dispatch({ type: "DELETE_ALL_ITEMS" });
    dispatch({ type: "SAVE_STATE" });
  };

  const countCals = () => {
    dispatch({ type: "COUNT_CALS" });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        setStorage,
        setCurrentItem,
        clearCurrentItem,
        storeItem,
        deleteItem,
        updateItem,
        setLoading,
        deleteAll,
        addMeal,
        countCals,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
