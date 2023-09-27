import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div class="jumbotron text-center">
      <h1>Happy Meal Restaurant</h1>
      <App />
    </div>
  </StrictMode>,
);
