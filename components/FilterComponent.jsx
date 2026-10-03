function Filter({ setRegion }) {
  return (
    <>
      <select
        name="select"
        id="select"
        onChange={(e) => {
          setRegion(
            e.target.value.toLowerCase() === "all" ? "" : e.target.value.trim(),
          );
        }}
      >
        <option value="All">All</option>
        <option value="africa">Africa</option>
        <option value="antartic Ocean">Antartic Ocean</option>
        <option value="asia">Asia</option>
        <option value="oceania">Oceania</option>
        <option value="europe">Europe</option>
        <option value="americas">America</option>
      </select>
    </>
  );
}

export default Filter;
