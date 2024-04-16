import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div>
      <>
        <div className="containerNavbar">
          <Link to="/" style={{ color: "beige" }}>
            Comision 54030
          </Link>
          <ul className="categories">
            <Link to="/">Todas</Link>
            <Link to="/category/urbanas">Urbanas</Link>
            <Link to="/category/deportivas">Deportivas</Link>
          </ul>
          <CartWidget />

        </div>
      </>
    </div>
  );
};
