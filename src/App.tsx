import "@src/styles/reset.css";
import "@src/styles/global.css";
import BaseLayout from "@shared/layouts/BaseLayout/BaseLayout";
import Home from "@pages/home";

function App() {
  return (
    <>
      <BaseLayout>
        <Home />
      </BaseLayout>
    </>
  );
}

export default App;
