import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import AllTours from "./components/AllTours/AllTours";
import TourDetails from "./pages/TourDetails";
import Login from "./pages/Login";
import Thanks from "./pages/Thanks";
import Dashboard from "./components/Dashboard/Dashboard";
import AddTourForm from "./components/Dashboard/AddTourForm";
import Siginup from "./pages/Siginup";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/tours" element={<AllTours />} />
        <Route path="/datails/:id" element={<TourDetails/>}/>
        <Route path="/signup" element={<Siginup/>}/>
        <Route path="/thanks" element={<Thanks/>}/>
        <Route path="/dashboard" element={<Dashboard/>}>
          <Route path="create" element={<AddTourForm/>}/>
        </Route>
      </Routes>
      <Footer/>
    </>
)
}

export default App;
