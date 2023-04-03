import { Component, useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";

function withTheme(Component) {
  return (props) => <Component {...props} theme={useContext(ThemeContext)} />;
}

class Navbar extends Component {
  render() {
    const { theme } = this.props;
    console.log(this.props);
    console.log(theme.toggleTheme);
    return (
      <nav
        id="navbar"
        className={`container ${theme.theme}`}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <NavLink end to=".">
          Home
        </NavLink>
        <div>
          <label className="switch">
            <input
              type="checkbox"
              onChange={(e) => theme.toggleTheme(e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
          {theme.authUser?.email ? (
            <span>{theme.authUser?.email}</span>
          ) : (
            <NavLink to="signin">login</NavLink>
          )}
        </div>
      </nav>
    );
  }
}

export default withTheme(Navbar);
