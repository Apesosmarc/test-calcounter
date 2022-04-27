import { useGlobalContext } from "./context/appContext";

function App() {
  const { items, isLoading, getItems } = useGlobalContext();

  if (isLoading) {
    return <div>We loadin</div>;
  }

  return <div>test</div>;
}

export default App;
