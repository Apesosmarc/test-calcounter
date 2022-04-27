import { useGlobalContext } from "./context/appContext";
import MealForm from "./components/MealForm";
import AppBarButton from "./components/AppBarButton";
import Container from "@mui/material/Container";

function App() {
  const { initStorage, setStorage } = useGlobalContext();

  useEffect(() => {
    if (!initStorage) {
      setStorage();
    }
  }, []);

  <div>
    <AppBarButton />
    <Container>
      <MealForm />
      <button>get Items</button>
      we not loadin
      <MealList />
    </Container>
  </div>;
}

export default App;
