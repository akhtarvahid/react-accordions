import React, { Component } from 'react'
import listArray from "../../utils/data.json";
import ToggleIcon from '../common/ToggleIcon';
import '../../App.css';
export default class SingleToggle extends Component {
    state = {
        lists: [],
        isOpenedAll: false
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
            return list.id === row.id && !list.open ? 
             ({...list, open: true }): 
             ({...list, open: false })
          })
      })
    }
    accordionRowsHandler=()=> {
        this.setState(prev => ({
            lists: this.state.lists.map(list => ({...list, open: !list.open})),
            isOpenedAll: !prev.isOpenedAll
        }))
    }
    render() {
        const { lists } = this.state;
        return (
            <div>
              <div className="collapse-btn">
                  <button onClick={this.accordionRowsHandler}>{this.state.isOpenedAll ? 'Collapse' : 'Open All'}</button>
              </div>  
              {lists.map(list => 
               <React.Fragment key={list.id}>
                 <div className="acc-heading" onClick={() => this.accordionRowHandler(list)}>
                  <div>{list.title}</div>
                  <ToggleIcon state={list.open}/>
                 </div>
                 {list.open && <div className="body">{list.content}</div>} 
               </React.Fragment>  
              )}
            </div>
        )
    }
}
