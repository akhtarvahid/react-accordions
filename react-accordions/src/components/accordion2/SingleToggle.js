import React, { Component } from 'react'
import listArray from "../../utils/data.json";
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
      this.setState({
          lists: this.state.lists.map(list => list.id === row.id ? ({...list, open: !list.open }): list)
      })
    }
    render() {
        return (
            <div>
              {this.state.lists.map(list => 
              <div key={list.id}  onClick={() => this.selectedRowHandler(list)}>
                 <div className="acc-heading">
                    <div>{list.title}</div>
                    <div>V</div>
                 </div>
                 {list.open && <div className="content">Opened</div>} 
              </div>  
              )}
            </div>
        )
    }
}
