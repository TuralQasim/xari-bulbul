import React from "react";

function AccSection({
  item,
  isActiveSection,
  index,
  setActiveIndex,
  sectionIndex,
}) {
  const toggleTitle = () => {
    const nextIndex = isActiveSection ? null : sectionIndex;
    setActiveIndex(nextIndex);
  };
  return (
    <div className="acc_item">
      <div className="acc_title" onClick={toggleTitle}>
        <h3>{isActiveSection ? "-" : "+"}</h3>
        <h2>{item.title}</h2>
      </div>
      {isActiveSection && <div className="acc_text">{item.content}</div>}
    </div>
  );
}

export default AccSection;
