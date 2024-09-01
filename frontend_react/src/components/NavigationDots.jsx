import React from "react";

const NavigationDots = ({ active }) => {
  const sections = ["home", "skills & experiences", "contact"];

  return (
    <div className="app__navigation">
      {sections.map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          // In-line style
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
