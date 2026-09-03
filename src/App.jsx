import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import "./App.css"
import{ useState } from "react"
import Home from "./pages/Home";
import Impacts from "./pages/Impacts";
import Solutions from "./pages/Solutions";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  return (
    <div>
      
    <Header />
      <Navbar setCurrentPage={setCurrentPage}/>

      {currentPage == "home" && <Home />}
      {currentPage == "impacts" && <Impacts />}
      {currentPage == "solutions" && <Solutions />}

    
      <Footer />
    </div>

  );
}

export default App;