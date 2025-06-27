"use client";

import Footer from "./Footer";
import Navbar from "./navbar/Navbar";
import BlackholeVideo from "./BlackholeVideo";
import SpaceBackground from "./SpaceBackground";

const MainLayout = ({ children }) => {
  return (
    <SpaceBackground>
      <Navbar />
      <BlackholeVideo />
      <main>{children}</main>
      <Footer />
    </SpaceBackground>
  );
};
export default MainLayout;
