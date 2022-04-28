import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useGlobalContext } from "../context/appContext";

const MealButtons = ({ formVals, clearInputs }) => {
  const { currentItem, clearCurrentItem, addMeal, deleteItem, updateItem } =
    useGlobalContext();

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    formVals.id = currentItem.id;

    updateItem(formVals);
  };

  const handleDeleteSubmit = (e) => {
    e.preventDefault();

    deleteItem(currentItem.id);
  };

  const handleBack = (e) => {
    e.preventDefault();

    clearCurrentItem();
  };

  const handleMealAdd = (e) => {
    e.preventDefault();

    addMeal(formVals);
    clearInputs();
  };

  const renderButtons = () => {
    if (currentItem) {
      return (
        <Stack
          spacing={1}
          direction="row"
          justifyContent="start"
          className="stack-mbl"
        >
          <Button
            sx={{
              background: "#ff9800",
            }}
            className="btn"
            onClick={handleUpdateSubmit}
            variant="text"
          >
            <i class="fa fa-pencil-square-o"></i> Update Meal
          </Button>
          <Button
            className="btn"
            onClick={handleDeleteSubmit}
            variant="contained"
            sx={{
              background: "#F44336",
            }}
          >
            <i class="fa fa-remove"></i> Delete Meal
          </Button>
          <div
            style={{
              width: "65%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              className="btn"
              onClick={handleBack}
              variant="outlined"
              align="right"
              sx={{
                alignSelf: "flex-end",
                justifySelf: "flex-end",
                background: "#9e9e9e",
              }}
            >
              <i class="fa fa-chevron-circle-left"></i> Back
            </Button>
          </div>
        </Stack>
        // <React.Fragment>
        //   <button >edit</button>
        //   <button onClick={handleDeleteSubmit}>delete</button>
        //   <button onClick={handleBack}>back</button>
        // </React.Fragment>
      );
    } else {
      return (
        <Button
          className="btn"
          sx={{ background: "#1565C0", marginTop: "35px" }}
          onClick={handleMealAdd}
        >
          <i class="fa fa-plus"></i> add meal
        </Button>
      );
    }
  };

  return renderButtons();
};

export default MealButtons;
