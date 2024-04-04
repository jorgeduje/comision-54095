import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <div>
      <>
        <div className="containerNavbar">
          <li to="/" style={{ color: "beige" }}>
            Comision 54030
          </li>
          <ul className="categories">
            <li to="/">Todas</li>
            <li to="/category/urbanas">Urbanas</li>
            <li to="/category/deportivas">Deportivas</li>
          </ul>
          <CartWidget />
        </div>
      </>
    </div>
  );
};
