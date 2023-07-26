import { NavLink } from "react-router-dom";
import { navLinksData } from "../../Data/Data";

const NavLinks = () => {
  function renderNavLinks() {
    return navLinksData.map(({ to, id, pageName }) => (
      <li key={id}>
        <NavLink to={to}>
          <span>{`0${id}`}</span>
          {pageName}
        </NavLink>
      </li>
    ));
  }

  return <>{renderNavLinks()}</>;
};

export default NavLinks;
