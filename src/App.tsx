import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import AboutTechPage from "./components/about/AboutTechPage";
import NavigationBar from "./components/NavigationBar";
import LocationsPage from "./components/locations/LocationsPage";
import ContactPage from "./components/contact/ContactPage";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className="relative min-h-screen bg-[#0D0D0D]">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutTechPage />} />
          <Route path="/technology" element={<AboutTechPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </div>
    </Suspense>
  );
}

export default App;
