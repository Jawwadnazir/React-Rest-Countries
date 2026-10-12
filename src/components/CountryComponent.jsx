import "../styles/Country.css";
import { useState, useEffect } from "react";
import { data, Link, useLocation, useParams } from "react-router";

function Country() {
  // const countryName = new URLSearchParams(window.location.search).get("name");
  const countryName = useParams().country;
  const url = `https://countries.dev/name/${countryName}`;
  const [country, setCountry] = useState({});
  const { state } = useLocation();

  console.log("Country", country);
  useEffect(() => {
    if (!state) {
      fetch(url)
        .then((res) => res.json())
        .then(([data]) => {
          setCountry({ ...data });
          if (Object.hasOwn(data, "borders")) {
            Promise.all(
              data.borders.map((border) => {
                return fetch(`https://countries.dev/alpha/${border}`).then(
                  (res) => res.json(),
                );
              }),
            ).then((data) =>
              setCountry((pre) => ({ ...pre, borderCountries: data })),
            );
          }
        });
    } else {
      setCountry(state);
      if (Object.hasOwn(state, "borders")) {
        Promise.all(
          state.borders.map((border) => {
            return fetch(`https://countries.dev/alpha/${border}`).then((res) =>
              res.json(),
            );
          }),
        ).then((data) =>
          setCountry((pre) => ({ ...pre, borderCountries: data })),
        );
      }
    }
  }, [countryName, state]);

  return Object.keys(country).length == 0 ? (
    "Loading......"
  ) : (
    <>
      <main>
        <div className="countryFlag">
          <img src={`${country.flags.svg}`} alt="" />
        </div>
        <div className="countryContent">
          <h2 className="country-name">{country.name}</h2>

          <div className="country-des">
            <p>
              Native Name
              <span className="native-name">
                {country.nativeName || "NO Name"}
              </span>
            </p>
            <p>
              Population
              <span className="population">
                {country.population || "No Population"}
              </span>
            </p>
            <p>
              Region<span className="region">{country.region}</span>
            </p>
            <p>
              Sub Region<span className="sub-region">{country.subregion}</span>
            </p>
            <p>
              Capital
              <span className="capital">{country.capital || "No Capital"}</span>
            </p>
            <p>
              Top Level Domain
              <span className="top-level-domain">{country.topLevelDomain}</span>
            </p>
            <p>
              Currency
              <span className="currency">
                {Object.hasOwn(country, "currencies")
                  ? country.currencies.map((currency) => {
                      return currency.name;
                    })
                  : "No Currency"}
              </span>
            </p>
            <p>
              Language
              <span className="language">
                {Object.hasOwn(country, "languages")
                  ? country.languages
                      .map((language) => language.name)
                      .join(" ,")
                  : "No Language "}
              </span>
            </p>

            {/* {Object.hasOwn(country, "borderCountries") &&
              country.borderCountries.length && (
                <p>
                  Border Countries{" "}
                  <span className="border-countries">
                    {country.borderCountries.map((country) => (
                      <Link to={`/${country.name}`} />
                    ))}
                  </span>
                </p>
              )} */}
          </div>
        </div>
      </main>
    </>
  );
}

export default Country;
