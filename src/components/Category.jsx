import React from "react";

function Category({ label, children }) {
  return (
    <div className="category">
      <p className="label">{label}</p>
      <div className="courses">{children}</div>
    </div>
  );
}

export default Category;
