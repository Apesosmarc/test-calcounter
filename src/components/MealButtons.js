import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useGlobalContext } from "../context/appContext";

const MealButtons = ({ formVals }) => {
  const { currentItem, clearCurrentItem, addMeal } = useGlobalContext();

  const renderButtons = () => {
    if (currentItem) {
      return (
        <Stack spacing={2} direction="row" justifyContent="start">
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
        <button
          onClick={(e) => {
            e.preventDefault();
            addMeal(formVals);
          }}
        >
          add item
        </button>
      );
    }
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
  };

  const handleDeleteSubmit = (e) => {
    e.preventDefault();
  };

  const handleBack = (e) => {
    e.preventDefault();

    clearCurrentItem();
  };

  return renderButtons();
};

export default MealButtons;
