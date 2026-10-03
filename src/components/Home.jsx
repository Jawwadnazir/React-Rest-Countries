import { useEffect, useState } from "react";
import Search from "./SearchComponent";
import Filter from "./FilterComponent";
import Card from "./CardComponent";

function Home() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    fetch("https://countries.dev/countries")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <>
      <div className="controls">
        <Search setQuery={setQuery} />
        <Filter setRegion={setRegion} />
      </div>



      <div className="card-container">
        {countries
          .filter((country) => {
            return country.region.toLowerCase().includes(region);
          })
          .filter((country) => {
            return country.name.toLowerCase().includes(query);
          })
          .map((country, i) => {
            return (
              <Card
                key={i}
                name={country.name}
                flag={country.flags.svg}
                region={country.region}
                population={country.population}
              />
            );
          })}
      </div>
    </>
  );
}

export default Home;
