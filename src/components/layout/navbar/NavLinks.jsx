import { NAV_LINKS } from "@/data/linksData";
import NavLink from "../../ui/NavLink";

const NavLinks = ({ mobile = false, setMenuOpen, setActiveNav, activeNav }) => {
  const handleClick = (href) => {
    setActiveNav(href);
    if (mobile) {
      setMenuOpen(!mobile);
    }
  };
  return NAV_LINKS.map(({ href, label }) => (
    <NavLink
      key={href}
      href={href}
      label={label}
      mobile={mobile}
      handleClick={handleClick}
      isActive={href === activeNav}
      className="w-full border-b border-white/10 lg:border-0 last:border-b-0 pb-2 lg:p-0"
    />
  ));
};

export default NavLinks;
