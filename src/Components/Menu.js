import "../Css/Menu.css";

function Menu() {
  let buttons = ["Home", "About", "Service", "Features"];

  return (
    <div className="menu-wrapper">
      <div className="menu-logo">Lucas Aires</div>
      <div className="menu-btns">
        {buttons.map((texto, idx) => {
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
