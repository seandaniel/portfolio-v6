// components
import { Header } from "./components/Header";
import { ProjectsList } from "./components/ProjectsList";
import { Footer } from "./components/Footer";

import "./index.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <ProjectsList />
      </main>
      <Footer />
    </>
  );
}

export default App;
