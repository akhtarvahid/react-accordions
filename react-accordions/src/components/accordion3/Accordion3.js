import React, { Component } from 'react'
import listArray from "../../utils/data.json";
import ToggleIcon from '../common/ToggleIcon';
import '../accordion2/SingleToggle.css';
export default class Accordion3 extends Component {
    state = {
        lists: []
    }
    componentDidMount() {
        this.setState({
            lists: listArray.map(list => ({ ...list, open: false }))
        })
    }
    accordionRowHandler=(row)=> {
      const { lists } = this.state;
      this.setState({
          lists: lists?.map(list => {
            return list.id === row.id ? 
             ({...list, open: !list.open }): 
             list
          })
      })
    }
    addChips=(item)=> {
      console.log(item);
    }
    render() {
        const { lists } = this.state;
        return (
            <div> 
              {lists.map(list => 
               <React.Fragment key={list.id}>
                 <div className="acc-heading" onClick={() => this.accordionRowHandler(list)}>
                  <div>{list.title}</div>
                  <ToggleIcon state={list.open}/>
                 </div>
                 {list.open && 
                 <div className="body">
                     <div>{list.content}</div>
                     <h4>Select items</h4>
                     <div className="acc-chips">
                        {list.items.map(item =>
                         <span key={item.id} className="chip" onClick={() => this.addChips(item)}>
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
