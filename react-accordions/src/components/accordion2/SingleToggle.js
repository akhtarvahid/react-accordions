import React, { Component } from 'react'
import listArray from "../../utils/data.json";

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
          lists: this.state.lists.map(list => list.id === row.id ? ({...list, open: true }): list)
      })
    }
    render() {
        return (
            <div>
              {this.state.lists.map(list => 
              <div key={list.id} onClick={() => this.selectedRowHandler(list)}>
                 <div>{list.title}</div>
                 {list.open && <div>Opened</div>} 
              </div>  
              )}
            </div>
        )
    }
}
