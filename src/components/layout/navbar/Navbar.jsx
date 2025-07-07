"use client";

import NavLinks from "./NavLinks";
import Logo from "@/components/ui/Logo";
import NavMenuButton from "./NavMenuButton";
import { usePathname } from "next/navigation";
import NavLink from "@/components/ui/NavLink";
import useLockScroll from "@/hooks/useLockScroll";
import { useState, useRef, useEffect } from "react";
import useClickOutside from "@/hooks/useClickOutside";
import { motion, AnimatePresence } from "framer-motion";

const NAV_HEIGHT_CLOSED = 65;
const NAV_HEIGHT_OPEN = 300;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(null);
  const navRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!activeNav && pathname) {
      setActiveNav(pathname);
    }
  }, []);

  const resetActiveNav = () => {
    setActiveNav(null);
  };

  useClickOutside(navRef, () => setMenuOpen(false), menuOpen);
  useLockScroll(menuOpen);
  return (
    <>
      {/* Outside dark overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Navbar*/}
      <motion.header
        ref={navRef}
        animate={{ height: menuOpen ? NAV_HEIGHT_OPEN : NAV_HEIGHT_CLOSED }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed top-0 w-full z-50 overflow-hidden bg-[#3b066d8c] text-white border-b border-white/10 backdrop-blur-xl shadow-lg shadow-violet-500/20"
      >
        {/* Top Row */}
        <div className="flex items-center justify-between px-4 h-[65px]">
          <div className="flex items-center gap-3">
            <Logo handleClick={resetActiveNav} />
            <NavLink
              handleClick={resetActiveNav}
              href="/"
              label="Jayveer Sodha"
              className="!uppercase"
            />
          </div>

          <div className="hidden lg:flex items-center gap-10">
            <NavLinks activeNav={activeNav} setActiveNav={setActiveNav} />
          </div>

          <div className="lg:hidden">
            <NavMenuButton setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
          </div>
        </div>

        {/* Mobile Nav Links */}
        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex flex-col justify-center items-center gap-2 px-6 pt-4 text-center"
            >
              <NavLinks
                activeNav={activeNav}
                setActiveNav={setActiveNav}
                setMenuOpen={setMenuOpen}
                mobile={menuOpen}
              />
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Navbar;
