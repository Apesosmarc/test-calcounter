import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import { getItems } from "../utils/getItems";

const initialState = {
  items: [],
  currentItem: null,
  totalCalories: 0,
  isLoading: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setLoading = () => {
    console.log("we loadin");
    dispatch({ type: "SET_LOADING" });
  };

  const getItem = () => {
    const items = [];

    if (localStorage.getItem("items") !== null) {
      items = JSON.parse(localStorage.getItem("items"));
    }

    return items;
  };

  const getItems = () => {
    setLoading();
    const items = [...JSON.parse(localStorage.getItem("items"))];
    if (!items.length) {
      dispatch({ type: "GET_ITEMS" });
    } else if (items.length) {
      dispatch({ type: "GET_ITEMS", payload: items });
    }
  };

  const addMeal = ({ meal = "", calories = 0 }) => {
    console.log("calling");
    dispatch({ type: "ADD_MEAL", payload: { meal, calories } });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        getItems,
        setLoading,
        addMeal,
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
