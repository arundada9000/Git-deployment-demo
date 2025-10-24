import StaggeredMenu from "./components/StaggeredMenu";

const App = () => {
  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "About", ariaLabel: "Learn about us", link: "/about" },
    { label: "Services", ariaLabel: "View our services", link: "/services" },
    { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
  ];

  const socialItems = [
    { label: "Facebook", link: "https://facebook.com/arundada9000" },
    { label: "GitHub", link: "https://github.com/arundada9000" },
    { label: "Instagram", link: "https://instagram.com/arundada9000" },
  ];

  return (
    <>
      <div style={{ height: "100vh", background: "#1a1a1a" }}>
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#fff"
          openMenuButtonColor="#000"
          changeMenuColorOnOpen={true}
          colors={["#B19EEF", "#5227FF"]}
          logoUrl="/src/assets/logo.png"
          accentColor="#ff6b6b"
          onMenuOpen={() => console.log("Menu opened")}
          onMenuClose={() => console.log("Menu closed")}
        />
      </div>
    </>
  );
};

export default App;
