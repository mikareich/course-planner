import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CourseContext } from "./CourseContext";

const allRoutes = {
  "/leistungskurse": "Leistungskurse",
  "/grundkurse": "Grundkurse",
  "/ueberblick": "Überblick",
};

function NavBar() {
  const { indicator, validRoutes } = useContext(CourseContext);
  const [progress, setProgress] = useState({ "--progress": "0%" });
  const [route, setRoute] = useState();
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    const indexRoute = Object.keys(allRoutes).indexOf(pathname);
    const currentProgress = (indexRoute + 1) / 3;
    setRoute(allRoutes[pathname]);
    setProgress({ "--progress": `${currentProgress * 100}%` });
  }, [location]);

  return (
    <header className="navbar">
      <h4 className="title">{route}</h4>
      <h4 className="indicator">{indicator}</h4>
      <div className="tab-bar">
        {Object.entries(allRoutes).map(([path, name]) => {
          const disabled = !validRoutes.includes(path);
          return (
            <div className="tab-item" key={path}>
              <Link
                to={disabled ? location.pathname : path}
                className={disabled ? "disabled" : ""}
              >
                {name}
              </Link>
            </div>
          );
        })}
        <div className="tab-indicator-container">
          <div className="indicator" style={progress} />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
