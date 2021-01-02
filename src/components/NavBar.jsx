import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const allRoutes = ["leistungskurse", "grundkurse", "ueberblick"];

function NavBar() {
  const [progress, setProgress] = useState({ "--progress": "0%" });
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    const currentRoute = allRoutes.find((route) => pathname.includes(route));
    const currentProgress = (allRoutes.indexOf(currentRoute) + 1) / 3;
    setProgress({ "--progress": `${currentProgress * 100}%` });
  }, [location]);

  return (
    <header className="navbar">
      <h4 className="title">Leistungskurse</h4>
      <h4 className="indicator">0 / 3</h4>
      <div className="tab-bar">
        <div className="tab-item">
          <Link to="/leistungskurse">Leistungskurse</Link>
        </div>
        <div className="tab-item">
          <Link to="/grundkurse">Grundkurse</Link>
        </div>
        <div className="tab-item">
          <Link to="/ueberblick">Überblick</Link>
        </div>
        <div className="tab-indicator-container">
          <div className="indicator" style={progress} />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
