import {  Link } from "react-router";

export default function Card({ name, flag, region, population, countryData }) {
  return (
    <>
      <div className="card">
        {/* <Link to={`/country?name=${encodeURI(name)}`}> */}
        <Link to={`/${name}`} state={countryData}>
          <img src={flag} alt="" />
          <div className="country-content">
            <h3>{name}</h3>
            <p>
              Population<span>{population}</span>
            </p>
            <p>
              Region<span>{region}</span>
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}
