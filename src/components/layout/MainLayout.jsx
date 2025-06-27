"use client";

import Navbar from "./navbar/Navbar";
import BlackholeVideo from "./BlackholeVideo";
import SpaceBackground from "./SpaceBackground";

const MainLayout = ({ children }) => {
  return (
    <SpaceBackground>
      <Navbar />
      <BlackholeVideo />
      <main>{children}</main>
    </SpaceBackground>
  );
};
export default MainLayout;
