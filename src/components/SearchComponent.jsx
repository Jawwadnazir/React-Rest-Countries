



function Search({setQuery}){
    return<>
    
    <input type="text" className="search" onChange={(e)=>{setQuery(e.target.value.trim() || "")}} />
    
    </>
}


export default Search