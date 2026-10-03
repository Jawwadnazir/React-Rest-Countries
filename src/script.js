import { createRoot } from "react-dom/client";
import App from "../components/AppComponent";
import { BrowserRouter } from "react-router";

const root = createRoot(document.querySelector("#root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
