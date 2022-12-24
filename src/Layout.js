import React from "react";
import Nav from "./components/Nav";

export default function Layout({ children }) {
  return (
    <div className="container">
      <Nav></Nav>
      <main>{children}</main>
    </div>
  );
}
