import React from "react";
import ToggleIcon from "../../ToggleIcon";

function AccordionHeader({ list, selectedIndx, index }) {
  const activeClass = selectedIndx === index ? "tile is-active" : "tile";
  return (
    <div className={activeClass}>
      <div className="left">
        <div>{list.title}</div>
      </div>
      <div className="right">
        <ToggleIcon state={selectedIndx === index ? true : false} />
      </div>
    </div>
  );
}
export default AccordionHeader;
