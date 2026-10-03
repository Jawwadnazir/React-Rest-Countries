import { Link } from "react-router"
function Header(){
return<>

<div className="header">
    <div className="title">Where Ends Meet</div>
    <div className="navigation">
        <li><Link to="/">Home</Link></li>
        <li>Dark Mode</li>
    </div>
</div>


</>
}



export default Header
