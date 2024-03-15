import { Link } from "react-router-dom";
import "./style.css";

export default function NavbarLinks({navLink , navText}) {
  return (
    <div className="RoutLinks">
        <Link className="link"  style={{textDecoration : "none"}} to={navLink}>{navText}</Link>
    </div>
  )
}
