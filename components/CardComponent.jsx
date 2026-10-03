import { Link } from "react-router";


export default function Card({ name, flag, region, population }) {
  return (
    <>
      <div className="card">
        <Link to={`/country?name=${encodeURI(name)}`}>
          <img src={flag} alt="" />
          <div className="country-content">
            <h3>
             {name}
            </h3>
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
