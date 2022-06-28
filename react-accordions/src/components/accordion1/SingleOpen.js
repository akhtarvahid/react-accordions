import React from 'react'
import './SingleOpen.css';
import listArray from "../../utils/data.json";
import AccordionHeader from './AccordionHeader';
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
            <AccordionHeader list={list} selectedIndx={this.state.selectedIndx} index={index} />
            {selectedIndx === index ? (
              <div className="content">
                <div>{list.content}</div>
              </div>
            ) : null}
          </div>
        ))}
      </>
    );
  }
}
