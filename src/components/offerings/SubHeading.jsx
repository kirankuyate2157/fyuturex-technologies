import React from "react";
import "./MenuItem.css";

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: "1rem" }}>
    <p className="p__cormorant">{title}</p>
    <div className="app__subheading-underline" />
  </div>
);

export default SubHeading;
