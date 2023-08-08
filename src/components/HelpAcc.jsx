import React from "react";
import AccSection from "./AccSection";
import { useState } from "react";

function HelpAcc({ words }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="help_acc">
      {words.heplAcc.map((item, index) => {
        return (
          <AccSection
            key={index}
            sectionIndex={index}
            item={item}
            isActiveSection={activeIndex === index}
            setActiveIndex={setActiveIndex}
          />
        );
      })}
    </div>
  );
}

export default HelpAcc;
