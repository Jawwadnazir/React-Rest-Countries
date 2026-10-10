import "../styles/Country.css";
import { useState, useEffect } from "react";
import { data, Link, useParams } from "react-router";

function Country() {
  // const countryName = new URLSearchParams(window.location.search).get("name");
  const countryName = useParams().country;
  const url = `https://countries.dev/name/${countryName}`;
  const [country, setCountry] = useState({});

  useEffect(() => {
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
  }, [countryName]);

  console.log(country);

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
              <span className="native-name">{country.nativeName}</span>
            </p>
            <p>
              Population<span className="population">{country.population}</span>
            </p>
            <p>
              Region<span className="region">{country.population}</span>
            </p>
            <p>
              Sub Region<span className="sub-region">{country.subregion}</span>
            </p>
            <p>
              Capital<span className="capital">{country.capital}</span>
            </p>
            <p>
              Top Level Domain
              <span className="top-level-domain">{country.topLevelDomain}</span>
            </p>
            <p>
              Currency
              <span className="currency">{country.currencies[0].name}</span>
            </p>
            <p>
              Language
              <span className="language">{country.languages[0].name}</span>
            </p>
           

          </div>

        </div>
      </main>
    </>
  );
}

export default Country;
