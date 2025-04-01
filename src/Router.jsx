import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/profil/ProfilPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import Page404 from "./pages/page404/Page404";
import RentalDetailsPage from "./pages/rentalDetailsPage/RentalDetailsPage";
import data from "./data/logements.json";
import Navbar from "./components/header/Navbar";
import ProfilPage from "./pages/profil/ProfilPage";

function Router() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/profil" element={<ProfilPage data={data} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/rental/:id" element={<RentalDetailsPage data={data} />} />
          {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclarer au dessus */}
          <Route path="*" element={<Page404 />} />
        </Routes>
    </BrowserRouter>
  );
}

export default Router;