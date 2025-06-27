// "use client";

// import clsx from "clsx";
// import { useState } from "react";
// import NavLinks from "./NavLinks";
// import SocialLinks from "./SocialLinks";
// import Logo from "@/components/ui/Logo";
// import NavMenuButton from "./NavMenuButton";
// import NavLink from "@/components/ui/NavLink";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="flex fixed top-0 w-full z-50 text-white bg-[#3b066d8c] border-b border-white/10 backdrop-blur-xl shadow-lg shadow-violet-500/20 px-3 h-[50px] lg:h-[65px]">
//       {/* Logo + Title */}
//       <div
//         className={clsx(
//           "mr-auto flex justify-center items-center gap-3 transition-opacity duration-300 ease-in-out",
//           menuOpen
//             ? "opacity-0 pointer-events-none"
//             : "opacity-100 pointer-events-auto"
//         )}
//       >
//         <Logo />
//         <NavLink key="/" href="/" label="Jayveer Sodha" />
//       </div>

//       {/* Desktop Nav Links */}
//       <div className="mx-auto hidden lg:flex justify-evenly items-center gap-10 w-fit">
//         <NavLinks />
//       </div>

//       {/* Mobile Nav Links */}
//       <div
//         className={clsx(
//           "absolute w-[80%]",
//           "lg:hidden flex justify-evenly items-center gap-3 h-full",
//           "transition-opacity duration-300 ease-in-out ",
//           menuOpen
//             ? "opacity-100 pointer-events-auto"
//             : "opacity-0 pointer-events-none"
//         )}
//       >
//         <NavLinks mobile />
//       </div>

//       {/* Social + Menu Button */}
//       <div className="ml-auto flex justify-center items-center gap-3">
//         {/* Social Icons */}
//         <div
//           className={clsx(
//             "transition-opacity duration-300 ease-in-out",
//             menuOpen
//               ? "opacity-0 pointer-events-none"
//               : "opacity-100 pointer-events-auto"
//           )}
//         >
//           <SocialLinks />
//         </div>

//         {/* Menu Toggle */}
//         <NavMenuButton setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
//       </div>
//     </header>
//   );
// };

// export default Navbar;

"use client";

import clsx from "clsx";
import { useState } from "react";
import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";
import Logo from "@/components/ui/Logo";
import NavMenuButton from "./NavMenuButton";
import NavLink from "@/components/ui/NavLink";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex fixed top-0 w-full z-50 text-white bg-[#3b066d8c] border-b border-white/10 backdrop-blur-xl shadow-lg shadow-violet-500/20 px-3 h-[50px] lg:h-[65px] transition-all duration-500 ease-in-out">
      {/* Logo + Title */}
      <div
        className={clsx(
          "mr-auto flex justify-center items-center gap-3 transition-all duration-500 ease-in-out transform",
          menuOpen
            ? "-translate-y-8 opacity-0 pointer-events-none"
            : "translate-y-0 opacity-100 pointer-events-auto"
        )}
      >
        <Logo />
        <NavLink key="/" href="/" label="Jayveer Sodha" />
      </div>

      {/* Desktop Nav Links */}
      <div className="mx-auto hidden lg:flex justify-evenly items-center gap-10 w-fit">
        <NavLinks />
      </div>

      {/* Mobile Nav Links */}
      <div
        className={clsx(
          "absolute top-full right-8 w-full px-15 pt-4 pb-6",
          "lg:hidden flex justify-evenly items-center gap-3 h-full",
          "transition-all duration-500 ease-in-out transform",
          menuOpen
            ? "translate-y-[-45px] opacity-100 pointer-events-auto"
            : "translate-y-[-15px] opacity-0 pointer-events-none"
        )}
      >
        <NavLinks setMenuOpen={setMenuOpen} mobile />
      </div>

      {/* Social + Menu Button */}
      <div className="ml-auto flex justify-center items-center gap-3 mr-4">
        {/* Social Icons */}
        <div
          className={clsx(
            "transition-all duration-500 ease-in-out transform",
            menuOpen
              ? "-translate-y-8 opacity-0 pointer-events-none"
              : "translate-y-0 opacity-100 pointer-events-auto"
          )}
        >
          <SocialLinks />
        </div>

        {/* Menu Toggle */}
        <NavMenuButton setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      </div>
    </header>
  );
};

export default Navbar;
