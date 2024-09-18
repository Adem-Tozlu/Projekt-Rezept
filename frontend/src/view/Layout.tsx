import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';



function Layout() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg bg-success fs-5">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/"><i className="bi bi-cake2 fs-2"></i></NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
              <ul className="navbar-nav gap-lg-4">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/create">Neues Rezept</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/meine-rezepte">Meine Rezepte</NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink className="nav-link dropdown-toggle " to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown link
                  </NavLink>
                  <ul className="dropdown-menu ">
                    <li><NavLink className="dropdown-item" to="/action">Action</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/another">Another action</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/somethink">Something else here</NavLink></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;