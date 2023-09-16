import { BrowserRouter, Route, Routes } from "react-router-dom";
import { pages } from "./pages/pages";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          {pages.map((page, id) => {
            return (
              <Route key={id} path={page.path} Component={page.component} />
            );
          })}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
