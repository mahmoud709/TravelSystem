import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import AllTours from "./components/AllTours/AllTours";
import TourDetails from "./pages/TourDetails";
import Siginup from './pages/siginup';
import Login from "./pages/Login";
import Thanks from "./pages/Thanks";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<AllTours />} />
        <Route path="/datails/:id" element={<TourDetails/>}/>
        <Route path="/signup" element={<Siginup/>}/>
        <Route path="/signin" element={<Login/>}/>
        <Route path="/thanks" element={<Thanks/>}/>
      </Routes>
      <Footer/>
    </>
)
}

export default App;
