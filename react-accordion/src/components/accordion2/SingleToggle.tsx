import React, { useEffect } from "react";
import listArray from "../../utils/data.json";
import ToggleIcon from "../common/ToggleIcon";
import "../../App.css";
import { List } from "../../types";

type State = {
  lists: List[];
  isOpenedAll: boolean;
};

const SingleToggle: React.FC = () => {
  const [state, setState] = React.useState<State>({
    lists: [],
    isOpenedAll: false,
  });

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      lists: listArray.map((list) => ({ ...list, open: false })),
    }));
  }, []);

  const accordionRowHandler = (row: List) => {
    const { lists } = state;
    setState((prevState) => ({
      ...prevState,
      lists: lists?.map((list) => {
        return list.id === row.id && !list.open
          ? { ...list, open: true }
          : { ...list, open: false };
      }),
    }));
  };
  const accordionRowsHandler = () => {
    setState((prev) => ({
      ...prev,
      lists: prev.lists.map((list) => ({ ...list, open: !list.open })),
      isOpenedAll: !prev.isOpenedAll,
    }));
  };

  const { lists } = state;
  return (
    <div>
      <div className="collapse-btn">
        <button onClick={accordionRowsHandler}>
          {state.isOpenedAll ? "Collapse" : "Open All"}
        </button>
      </div>
      {lists.map((list) => (
        <React.Fragment key={list.id}>
          <div
            className="accordion-heading"
            onClick={() => accordionRowHandler(list)}
          >
            <div>{list.title}</div>
            <ToggleIcon state={list.open} className={""} />
          </div>
          {list.open && <div className="body">{list.content}</div>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default SingleToggle;
