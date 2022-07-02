import React from 'react'
import './SingleOpen.css';
import listArray from "../../utils/data.json";
import AccordionHeader from '../common/AccordionHeader';
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
        {lists.map((list) => (
          <div
            className="heading"
            key={list.id}
            onClick={() => this.handleTile(list.id)}
          >
            <AccordionHeader list={list} selectedIndx={selectedIndx} index={list.id} />
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
}
