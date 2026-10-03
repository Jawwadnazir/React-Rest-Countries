import { createRoot } from "react-dom/client";
import App from "/src/components/AppComponent.jsx";
import { BrowserRouter } from "react-router";

const root = createRoot(document.querySelector("#root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
