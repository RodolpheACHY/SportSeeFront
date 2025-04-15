import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page404 from "./pages/Page404";
//import RentalDetailsPage from "./pages/rentalDetailsPage/RentalDetailsPage";
//import data from "./data/logements.json";
import ProfilPage from "./pages/profil/ProfilPage";
import Layout from "./components/layout/Layout";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route path="profil/:id" element={<ProfilPage />} />
          {/* <Route path="/profil" element={<ProfilPage data={data} />} /> */}
          {/* <Route path="/profil/:id" element={<RentalDetailsPage data={data} />} /> */}
          {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclarer au dessus */}
          { <Route path="*" element={<Page404 />} /> }
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
