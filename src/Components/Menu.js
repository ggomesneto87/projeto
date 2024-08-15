import "../Css/Menu.css";
import { MENU_BTNS } from "./Content";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <div className="menu-wrapper">
      <div className="menu-logo">Lucas Aires</div>
      <div className="menu-btns">
        {MENU_BTNS.map((texto, idx) => {
          return (
            <NavLink exact to={"/" + texto.toLowerCase()}>
              <div className="menu-btn" key={idx}>
                {texto}
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
