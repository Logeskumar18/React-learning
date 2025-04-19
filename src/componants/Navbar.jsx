import "../styles.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <li>
              <Link to="/RegularFetch">RegularFetch</Link>
            </li>
          </li>
          {/* <li></li>
          <li></li>
          <li></li>
          <li></li> */}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
