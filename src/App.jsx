// Import dependencies/components
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavTabs />
      <main className="mx-3">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
