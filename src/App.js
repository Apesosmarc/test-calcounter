import { useGlobalContext } from "./context/appContext";
import MealForm from "./components/MealForm";
import AppBarButton from "./components/AppBarButton";
import Container from "@mui/material/Container";

function App() {
  const { items, isLoading, getItems } = useGlobalContext();

  if (isLoading) {
    return <div>We loadin</div>;
  }

  <div>
    <AppBarButton />
    <Container>
      <MealForm />
    </Container>
  </div>;
}

export default App;
