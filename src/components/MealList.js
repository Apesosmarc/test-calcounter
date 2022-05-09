import Typography from "@mui/material/Typography";
import React, { useEffect, useState, useMemo } from "react";

import BasicTable from "./BasicTable";
import { useGlobalContext } from "../context/appContext";

const countCals = (items) => {
  return items.reduce((prev, curr) => {
    return prev + curr.calories;
  }, 0);
};

const MealList = () => {
  const { items, totalCalories } = useGlobalContext();
  const [currCals, setCurrCals] = useState(totalCalories);
  const memoSum = useMemo(() => countCals(items), [items]);

  return (
    <React.Fragment>
      <Typography
        variant="h3"
        gutterBottom
        component="div"
        align="center"
        sx={{ marginTop: "20px" }}
      >
        Total Calories: {memoSum}
      </Typography>
      <BasicTable />
    </React.Fragment>
  );
};

export default MealList;
