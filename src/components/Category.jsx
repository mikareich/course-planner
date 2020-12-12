import React from "react";

function Category({ label, children }) {
  return (
    <div className="category">
      <span className="label">{label}</span>
      {children}
    </div>
  );
}

export default Category;
