import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div class=" text-center">
      <h1>Holiday Restaurant</h1>
      <hr className="headerLine" />
      <App />
    </div>
  </StrictMode>,
);
