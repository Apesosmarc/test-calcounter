import React, { useContext, useEffect, useReducer } from "react";
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
  };

  // set default empty str to meal entry + cals = 0
  const addMeal = ({ meal = "", calories = 0 }) => {
    if (meal.trim() === "") return;
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
        setCurrentItem,
        clearCurrentItem,
        storeItem,
        deleteItem,
        updateItem,
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
// Storage Controller
// const StorageCtrl = (function () {
//   // Public methods
//   return {
//     storeItem: function (item) {
//       let items;

//       // Check if any items in localStorage
//       if (localStorage.getItem("items") === null) {
//         // no items in localStorage
//         items = [];
//         // Push new item
//         items.push(item);
//         // Set localStorage
//         localStorage.setItem("items", JSON.stringify(items));
//       } else {
//         // Get what is already in localStorage
//         items = JSON.parse(localStorage.getItem("items"));
//         // Push new item
//         items.push(item);
//         // Reset localStorage
//         localStorage.setItem("items", JSON.stringify(items));
//       }
//     },

//     getItemsFromStorage: function () {
//       let items;

//       if (localStorage.getItem("items") === null) {
//         // Nothing in localStorage
//         items = [];
//       } else {
//         items = JSON.parse(localStorage.getItem("items"));
//       }

//       return items;
//     },

//     updateItemStorage: function (updatedItem) {
//       let items = JSON.parse(localStorage.getItem("items"));

//       items.forEach(function (item, index) {
//         if (updatedItem.id === item.id) {
//           items.splice(index, 1, updatedItem);
//         }
//       });

//       localStorage.setItem("items", JSON.stringify(items));
//     },

//     deleteItemFromStorage: function (id) {
//       let items = JSON.parse(localStorage.getItem("items"));

//       items.forEach(function (item, index) {
//         if (id === item.id) {
//           items.splice(index, 1);
//         }
//       });

//       localStorage.setItem("items", JSON.stringify(items));
//     },

//     clearItemsFromStorage: function () {
//       localStorage.removeItem("items");
//     },
//   };
// })();
