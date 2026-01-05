import "./App.css";

import { useState, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import HomePage from "./pages/HomePage";
import ProBonoPage from "./pages/ProBonoPage";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const aboutRef = useRef(null);
  const activitiesRef = useRef(null);
  const galleryRef = useRef(null);
  const partnerRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen font-sans bg-amber-50 text-slate-800">
      <Router>
        <Navbar
          onClickAboutRef={() => scrollToSection(aboutRef)}
          onClickActivitiesRef={() => scrollToSection(activitiesRef)}
          onClickGalleryRefRef={() => scrollToSection(galleryRef)}
          onClickPartnerRef={() => scrollToSection(partnerRef)}
        />

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
                setModalOpen={setModalOpen}
              />
            }
          />

          <Route path="/layanan-probono" element={<ProBonoPage />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer
          onClickAboutRef={() => scrollToSection(aboutRef)}
          onClickActivitiesRef={() => scrollToSection(activitiesRef)}
          onClickGalleryRefRef={() => scrollToSection(galleryRef)}
        />

        {modalOpen && <Modal onClose={() => setModalOpen(false)} />}
      </Router>
    </div>
  );
}
