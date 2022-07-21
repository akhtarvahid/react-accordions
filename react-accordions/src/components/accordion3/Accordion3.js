import React, { Component } from 'react'
import listArray from "../../utils/data.json";
import ToggleIcon from '../common/ToggleIcon';
import '../../App.css';
export default class Accordion3 extends Component {
    state = {
        lists: listArray
    }
    accordionRowHandler=(row)=> {
      const { lists } = this.state;
      this.setState({
          lists: lists?.map(list => { 
              return list.id === row.id ?  ({...list, open: !list.open }): list
          })
      })
    }
    selectChips=(row, chip)=> {
        this.setState(prev => ({
            lists: prev?.lists?.map(innerList => { 
                return innerList.id === row.id ? {
                ...innerList,
                items: innerList.items.map(item => {
                    return item.id === chip.id ? {...item, selected: !item.selected} : item
                })
            } : innerList
            })
        }))
    }
    render() {
        const { lists } = this.state;
        return (
            <div> 
              {lists.map(list => 
               <React.Fragment key={list.id}>
                 <div className="accordion-heading" onClick={() => this.accordionRowHandler(list)}>
                  <div>{list.title}</div>
                  <ToggleIcon state={list.open}/>
                 </div>
                 {list.open && 
                 <div className="body">
                     <div>{list.content}</div>
                     <h4>Select items</h4>
                     <div className="accordion-chips">
                        {list.items.map(item =>
                         <span 
                             key={item.id} 
                             onClick={() => this.selectChips(list, item)}
                             className={`chips ${!item.selected ? 'chip': 'selected'}`}>
                             {item.item}
                         </span>    
                        )} 
                     </div>
                 </div>} 
               </React.Fragment>  
              )}
            </div>
        )
    }
}
