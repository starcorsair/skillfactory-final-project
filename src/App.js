import "./App.css";
import Authentification from "./components/Authentification/Authentification";

function App() {
  return (
    <Store>
      <Page />,
      <Authentification />,
      <Record />,
      <Employees />
    </Store>
  );
}

export default App;
