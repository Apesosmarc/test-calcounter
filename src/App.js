import MealList from "./components/MealList";
import MealForm from "./components/MealForm";
import AppBarButton from "./components/AppBarButton";
import Container from "@mui/material/Container";
import { useGlobalContext } from "./context/appContext";
import { useEffect } from "react";

function App() {
  const { initStorage, setStorage, countCals } = useGlobalContext();

  // inits items in storage.
  useEffect(() => {
    if (!initStorage) {
      setStorage();
    }
  }, []);

  return (
    <div>
      <AppBarButton />
      <Container>
        <MealForm />

        <MealList />
      </Container>
    </div>
  );
}

export default App;
