import SpaceBackground from "../components/SpaceBackground";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SpaceBackground />
        <main>{children}</main>
      </body>
    </html>
  );
}
