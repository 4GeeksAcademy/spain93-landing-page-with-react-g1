import React from "react";
import { Footer } from "./Footer";

export const Navbar = () => {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
        <div
          className="collapse"
          id="navbarToggleExternalContent"
          data-bs-theme="dark"
        >
          <div className="bg-dark p-4">
            <h5 className="text-body-emphasis h4">Collapsed content</h5>
            <span className="text-body-secondary">
              Toggleable via the navbar brand.
            </span>
          </div>
        </div>
        <Footer/>
      </>
    );
  };
  
  