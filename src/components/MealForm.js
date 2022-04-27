import * as React from "react";
import { useState } from "react";
import { useGlobalContext } from "../context/appContext";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const mealEntry = {
  meal: "",
  calories: 0,
};

export default function MealForm() {
  const [formVals, setFormVals] = useState(mealEntry);
  const { addMeal } = useGlobalContext();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormVals({
      ...formVals,
      [name]: value,
    });
  };
  return (
    <Card sx={{}}>
      <CardContent>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
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
          <button
            onClick={(e) => {
              e.preventDefault();
              addMeal(formVals);
            }}
          >
            add item
          </button>
        </Box>
      </CardContent>
    </Card>
  );
}
