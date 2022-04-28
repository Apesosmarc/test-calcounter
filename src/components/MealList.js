import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";
import { useGlobalContext } from "../context/appContext";
import BasicTable from "./BasicTable";
const MealList = () => {
  const { items, countCals, totalCalories } = useGlobalContext();

  useEffect(() => {
    countCals();
  }, [items]);

  return (
    <React.Fragment>
      <Typography
        variant="h3"
        gutterBottom
        component="div"
        align="center"
        sx={{ marginTop: "20px" }}
      >
        Total Calories: {totalCalories}
      </Typography>
      <BasicTable />
    </React.Fragment>
  );
};

export default MealList;
