import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <nav>
        <ul className="navigation">
          <li>
            <NavLink to="/" className="nav-link">
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/search" className="nav-link">
              Búsqueda
            </NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
