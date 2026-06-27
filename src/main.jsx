import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";

import App from "./App";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />

    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={12}
      toastOptions={{
        duration: 3000,

        style: {
          borderRadius: "14px",
          background: "#1A1A2E",
          color: "#ffffff",
          fontSize: "15px",
          padding: "16px",
        },

        success: {
          iconTheme: {
            primary: "#FF6B35",
            secondary: "#ffffff",
          },
        },

        error: {
          iconTheme: {
            primary: "#EF4444",
            secondary: "#ffffff",
          },
        },
      }}
    />
  </React.StrictMode>
);