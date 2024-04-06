import { useState } from "react";
import "./SingleOpen.css";
import listArray from "../../utils/data.json";
import AccordionHeader from "../common/AccordionHeader";
import { List } from "../../types";

export default function Accordion1() {
  const [state, setState] = useState<{
    lists: List[];
    selectedIndx: number | null;
  }>({
    lists: listArray,
    selectedIndx: null,
  });
  const handleTile = (index: number) => {
    setState((prev) => ({ ...prev, selectedIndx: index }));
  };
  const { selectedIndx, lists } = state;
  return (
    <>
      {lists.map((list) => (
        <div
          className="heading"
          key={list.id}
          onClick={() => handleTile(list.id)}
        >
          <AccordionHeader
            list={list}
            selectedIndx={selectedIndx}
            index={list.id}
          />
          {selectedIndx === list.id ? (
            <div className="content">
              <div>{list.content}</div>
            </div>
          ) : null}
        </div>
      ))}
    </>
  );
}
