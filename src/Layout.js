import React from "react";
import Nav from "./components/Nav";

export default function Layout({ children }) {
  return (
      <div>
      <Nav></Nav>
      <div className="container">
      <main>{children}</main>
      </div>
    </div>
  );
}
