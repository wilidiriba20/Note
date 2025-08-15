import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom"; // ✅ correct package for BrowserRouter
import { Toaster } from "react-hot-toast"; // ✅ correct spelling
import "./index.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster /> {/* ✅ correct spelling */}
    </BrowserRouter>
  </StrictMode>
);
