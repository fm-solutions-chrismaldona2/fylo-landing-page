import "@src/styles/reset.css";
import "@src/styles/global.css";
import NavBar from "@shared/components/NavBar/NavBar";
import Home from "@pages/home";

function App() {
  return (
    <>
      <NavBar />
      <Home />
    </>
  );
}

export default App;
