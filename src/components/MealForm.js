import * as React from "react";
import { useState } from "react";
import { useGlobalContext } from "../context/appContext";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MealButtons from "./MealButtons";

const initState = () => {
  return {
    meal: "",
    calories: 0,
  };
};

export default function MealForm() {
  const { currentItem } = useGlobalContext();

  const [formVals, setFormVals] = useState(initState());

  React.useEffect(() => {
    if (currentItem) {
      setFormVals(currentItem);
    } else {
      setFormVals(initState());
    }
  }, [currentItem]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;

    //avoiding NaN inputs
    if (name === "calories") {
      value = parseInt(value);
      if (value && isNaN(value)) {
        return;
      }
    }

    setFormVals({
      ...formVals,
      [name]: value,
    });
  };

  const clearInputs = () => {
    setFormVals(initState());
  };
  return (
    <Card>
      <CardContent>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <Typography
            sx={{ fontSize: "30px" }}
            color="text.secondary"
            gutterBottom
          >
            Add Meal / Food Item
          </Typography>
          <TextField
            id="standard-required"
            name="meal"
            label="Meal"
            placeholder="Add Item"
            variant="standard"
            sx={{ width: "45%" }}
            value={formVals.meal}
            onChange={handleInputChange}
          />
          <TextField
            id="standard-number"
            name="calories"
            label="Calories"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            sx={{ width: "45%" }}
            value={formVals.calories}
            onChange={handleInputChange}
          />

          <MealButtons clearInputs={clearInputs} formVals={formVals} />
        </Box>
      </CardContent>
    </Card>
  );
}
