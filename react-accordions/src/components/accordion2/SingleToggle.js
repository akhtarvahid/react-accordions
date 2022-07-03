import React, { Component } from 'react'
import listArray from "../../utils/data.json";
import ToggleIcon from '../common/ToggleIcon';
import './SingleToggle.css';
export default class SingleToggle extends Component {
    state = {
        lists: []
    }
    componentDidMount() {
        this.setState({
            lists: listArray.map(list => ({ ...list, open: false }))
        })
    }
    selectedRowHandler=(row)=> {
      const { lists } = this.state;
      this.setState({
          lists: lists?.map(list => {
            return list.id === row.id ? 
             ({...list, open: !list.open }): 
             list
          })
      })
    }
    render() {
        const { lists } = this.state;
        return (
            <div>
              {lists.map(list => 
              <div key={list.id}  onClick={() => this.selectedRowHandler(list)}>
                 <div className="acc-heading">
                    <div>{list.title}</div>
                    <ToggleIcon state={list.open}/>
                 </div>
                 {list.open && <div className="body">{list.content}</div>} 
              </div>  
              )}
            </div>
        )
    }
}
