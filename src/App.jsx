import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import "./App.css"
import{ useState } from "react"
import Home from "./pages/Home";
import Environmental from "./pages/Environmental";
import Economic from "./pages/Economic";
import Cultural from "./pages/Cultural";
import Solutions from "./pages/Solutions";
import About from "./pages/About";
import History from "./pages/History";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  return (
    <div>
    <Navbar setCurrentPage={setCurrentPage}/>   
    <Header />


      {currentPage == "economic" && <Economic />}
      {currentPage == "environmental" && <Environmental />}
      {currentPage == "cultural" && <Cultural />}
      {currentPage == "solutions" && <Solutions />}
      {currentPage == "about" && <About />}
      {currentPage == "history" && <History />}
  

    <About />
    <History />
    <Footer />
    </div>

  );
}

export default App;