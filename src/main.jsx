import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";  // ✅ Ensure this import matches the file location
import "./index.css";  // ✅ Ensure global styles are imported

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
