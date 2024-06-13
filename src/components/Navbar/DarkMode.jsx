import React from "react";

import DarkButton from "../../assets/website/dark-mode-button.png";
import LightButton from "../../assets/website/light-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div className="relative">
      <img
        src={LightButton}
        alt=""
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
          localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
        }}
        className={`w-12 cursor-pointer ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        } duration-200 absolute right-0`}
      />
      <img
        src={DarkButton}
        alt=""
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
          localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
        }}
        className={`w-12`}
      />
    </div>
  );
};

export default DarkMode;
