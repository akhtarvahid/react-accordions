import React from "react";
import ToggleIcon from "../../ToggleIcon";

function AccordionHeader({ list, selectedIndx, index }) {
  return (
    <div className={selectedIndx === index ? "tile is-active" : "tile"}>
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
