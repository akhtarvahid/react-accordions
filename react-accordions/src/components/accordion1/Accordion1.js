import React from 'react'
import './Accordion1.css';
import listArray from "../../utils/data.json";
import ToggleIcon from '../../ToggleIcon';
export default class Accordion1 extends React.Component {
  state = {
    lists: listArray,
    selectedIndx: null,
  };
  handleTile = (index) => {
    this.setState({ selectedIndx: index });
  };

  render() {
    const { selectedIndx, lists } = this.state;
    return (
      <>
        {lists.map((list, index) => (
          <div
            className="heading"
            key={index}
            onClick={() => this.handleTile(index)}
          >
             <div className={selectedIndx === index ? "tile is-active" : "tile"}>
              <div className="left">
                <div>{list.title}</div>
              </div>
              <div className="right">
                <ToggleIcon state={selectedIndx === index ? true : false} />
              </div>
            </div>

            {selectedIndx === index ? (
              <React.Fragment>
                <p>{list.content}</p>
              </React.Fragment>
            ) : null}
          </div>
        ))}
      </>
    );
  }
}
