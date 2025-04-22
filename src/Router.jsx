import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page404 from "./pages/page404/Page404";
import ProfilPage from "./pages/profilPage/ProfilPage";
import Layout from "./components/layout/Layout";

function Router() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
              <Route path="profil/:id" element={<ProfilPage/>} />
              <Route path="*" element={<Page404 />} />         
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default Router;