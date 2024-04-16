import { Badge } from "@mui/material";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart">
      <Badge badgeContent={0} showZero color="primary">
        <BsFillCartCheckFill size="30px" color="beige" />
      </Badge>
    </Link>
  );
};

export default CartWidget;
