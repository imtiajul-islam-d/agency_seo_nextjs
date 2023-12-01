import React from "react";

const ComponentTitle = ({ title, heading }) => {
  return (
    <div className="max-w-[22.188rem] md:max-w-[30.938rem]">
      <h3 className="pg_title">{title}</h3>
      <h2 className="pg_t2">{heading}</h2>
    </div>
  );
};

export default ComponentTitle;
