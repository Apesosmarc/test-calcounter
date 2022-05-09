import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";

import BasicTable from "./BasicTable";
import { useGlobalContext } from "../context/appContext";
const MealList = () => {
  const { items, totalCalories } = useGlobalContext();
  const [currCals, setCurrCals] = useState(totalCalories);

  useEffect(() => {
    setCurrCals(
      items.reduce((prev, curr) => {
        return prev + curr.calories;
      }, 0)
    );

    console.log(items);
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
        Total Calories: {currCals}
      </Typography>
      <BasicTable />
    </React.Fragment>
  );
};

export default MealList;
