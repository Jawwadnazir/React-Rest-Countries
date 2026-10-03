import Header from "./HeaderComponent";
import Home from "./Home";
import Error from "./Error";
import Country from "./CountryComponent";

import { Routes, Route } from "react-router";
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:country" element={<Country />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
