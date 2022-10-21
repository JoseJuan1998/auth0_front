import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Auth0Provider
    clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
    domain={import.meta.env.VITE_AUTH0_DOMAIN}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
