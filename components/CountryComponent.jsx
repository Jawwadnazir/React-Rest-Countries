import { useState, useEffect } from "react";

function Country() {
  const country = new URLSearchParams(window.location.search).get("name");
  //   console.log(country);

  const [Country, SetCountry] = useState();

  useEffect(() => {
    fetch(`https://countries.dev/name/${country}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        SetCountry(data[0]);
      });
  }, [country]);

  console.log(Country);

  return (

    <h1>dwd</h1>
    // <>
    //   <div className="country-flag">
    //     <img src="${country.flags.svg}" alt="" />
    //   </div>
    //   <div className="country-content">
    //     <h2 className="country-name">${country.name}</h2>

    //     <div className="country-des">
    //       <p>
    //         Native Name
    //         <span className="native-name">${country.nativeName}</span>
    //       </p>
    //       <p>
    //         Population<span className="population">${country.population}</span>
    //       </p>
    //       <p>
    //         Region<span className="region">${country.population}</span>
    //       </p>
    //       <p>
    //         Sub Region<span className="sub-region">${country.subregion}</span>
    //       </p>
    //       <p>
    //         Capital<span className="capital">${country.capital}</span>
    //       </p>
    //       <p>
    //         Top Level Domain
    //         <span className="top-level-domain">${country.topLevelDomain}</span>
    //       </p>
    //       <p>
    //         Currency
    //         <span className="currency">${country.currencies[0].name}</span>
    //       </p>
    //       <p>
    //         Language
    //         <span className="language">${country.languages[0].name}</span>
    //       </p>
    //     </div>
    //   </div>
    // </>
  );
}

export default Country;
