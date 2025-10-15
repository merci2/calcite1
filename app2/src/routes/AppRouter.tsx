import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Overview from "../pages/Overview/Overview";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Startseite: Redirect zu /overview/map */}
        <Route path="/" element={<Navigate to="/overview/map" replace />} />
        
        {/* /overview ohne Parameter -> Redirect zu /overview/map */}
        <Route path="/overview" element={<Navigate to="/overview/map" replace />} />
        
        {/* /overview/map oder /overview/grid */}
        <Route path="/overview/:viewType" element={<Overview />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;