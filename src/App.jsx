import "./App.css";

import { useRef } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProBonoPage from "./pages/ProBonoPage";
import RegistrationPageIKPI from "./pages/RegistrationPageIKPI";
import RegistrationPagePublic from "./pages/RegistrationPagePublic";

const MainContent = () => {
  const aboutRef = useRef(null);
  const activitiesRef = useRef(null);
  const galleryRef = useRef(null);
  const partnerRef = useRef(null);

  const location = useLocation();
  const hideLayout = [
    "/registrasi-anggota-ikpi",
    "/registrasi-anggota-umum",
  ].includes(location.pathname);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen font-sans bg-amber-50 text-slate-800">
      {!hideLayout && (
        <Navbar
          onClickAboutRef={() => scrollToSection(aboutRef)}
          onClickActivitiesRef={() => scrollToSection(activitiesRef)}
          onClickGalleryRefRef={() => scrollToSection(galleryRef)}
          onClickPartnerRef={() => scrollToSection(partnerRef)}
        />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              onClickAboutRef={() => scrollToSection(aboutRef)}
              aboutRef={aboutRef}
              activitiesRef={activitiesRef}
              galleryRef={galleryRef}
              partnerRef={partnerRef}
            />
          }
        />

        <Route path="/layanan-probono" element={<ProBonoPage />} />

        <Route
          path="/registrasi-anggota-ikpi"
          element={<RegistrationPageIKPI />}
        />
        <Route
          path="/registrasi-anggota-umum"
          element={<RegistrationPagePublic />}
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {!hideLayout && (
        <Footer
          onClickAboutRef={() => scrollToSection(aboutRef)}
          onClickActivitiesRef={() => scrollToSection(activitiesRef)}
          onClickGalleryRefRef={() => scrollToSection(galleryRef)}
        />
      )}
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  );
}
