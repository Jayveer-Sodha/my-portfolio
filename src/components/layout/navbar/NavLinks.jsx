import { NAV_LINKS } from "@/configs/linksData";
import NavLink from "../../ui/NavLink";

const NavLinks = ({ mobile = false, setMenuOpen }) =>
  NAV_LINKS.map(({ href, label }) => (
    <NavLink
      key={href}
      href={href}
      label={label}
      mobile={mobile}
      setMenuOpen={setMenuOpen}
    />
  ));

export default NavLinks;
