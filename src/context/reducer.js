import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import { getItems } from "../utils/getItems";

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
    dispatch({ type: "SET_STORAGE" });
  };

  const storeItem = (items) => {
    localStorage.setItem("items", JSON.stringify(items));
    dispatch({ type: "STORE_ITEM", payload: items });
  };

  const addMeal = ({ meal = "", calories = 0 }) => {
    const numCals = Math.trunc(parseInt(calories));
    dispatch({ type: "ADD_MEAL", payload: { meal, calories: numCals } });
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
        storeItem,
        getItems,
        setLoading,
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
