import "../Css/Menu.css";
import { MENU_BTNS } from "./Content";

function Menu() {
  return (
    <div className="menu-wrapper">
      <div className="menu-logo">Lucas Aires</div>
      <div className="menu-btns">
        {MENU_BTNS.map((texto, idx) => {
          return (
            <div className="menu-btn" key={idx}>
              {texto}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
