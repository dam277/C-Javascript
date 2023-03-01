import "../css/banner.css";
import logo from "../assets/logo.png"

function Banner() 
{
    const TITLE = 'La maison jungle'
    return (
    <div className="lmj-banner">
        <img src={logo} alt="La maison jungle logo" className="lmj-logo" />
        <h1 className="lmj-title">{ TITLE }</h1>
    </div>
    )
}

export default Banner;