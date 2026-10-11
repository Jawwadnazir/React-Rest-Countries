import "../styles/HomeShimmer.css";

export const HomeShimmer = () => {
  const arr = Array.from({ length: 10 });
  return (
    <>
      <div className="card-container">
        {
            arr.map((crt,index)=>{
                return <div className="shimmer-card" key={index}></div>
            })
        }
      </div>
    </>
  );
};
