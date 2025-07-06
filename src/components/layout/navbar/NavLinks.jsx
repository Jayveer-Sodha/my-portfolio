import { NAV_LINKS } from "@/data/linksData";
import NavLink from "../../ui/NavLink";

const NavLinks = ({ mobile = false, setMenuOpen }) =>
  NAV_LINKS.map(({ href, label }) => (
    <NavLink
      key={href}
      href={href}
      label={label}
      mobile={mobile}
      setMenuOpen={setMenuOpen}
      className="w-full border-b border-white/10 lg:border-0 last:border-b-0 pb-2"
    />
  ));

export default NavLinks;
