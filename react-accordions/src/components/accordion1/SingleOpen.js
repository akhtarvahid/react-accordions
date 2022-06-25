import React from 'react'
import './singleOpen.css';
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
            <AccordionHeader selectedIndx={this.state.selectedIndx} index={index} />

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
