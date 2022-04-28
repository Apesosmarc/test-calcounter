import MealList from "./components/MealList";
import MealForm from "./components/MealForm";
import AppBarButton from "./components/AppBarButton";
import Container from "@mui/material/Container";
import { useGlobalContext } from "./context/appContext";
import { useEffect } from "react";

function App() {
  const { initStorage, setStorage } = useGlobalContext();

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
        <button>get Items</button>
        we not loadin
        <MealList />
      </Container>
    </div>
  );
}

export default App;
