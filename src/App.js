import React, { Component } from 'react'
import Todoitems from './Component/Todoitems/Todoitems'
import Additems from './Component/Additems/Additems'
class App extends Component{
  state = {
    items:[ 
      {id:1, name:'ali', age:22},
      {id:2, name:'ahmed', age:75},
      {id:3, name:'sara', age:45}
    ]
  }
  deletItem = (id) => {
    let items = this.state.items.filter(item => {
      return item.id !== id
    })
    this.setState({items})
  }
  addItem = (item) => {
    item.id = Math.random();
  let items= this.state.items;
  items.push(item);
  this.setState({items})
  }
 
  render(){
  return (
    <div className="App container">
      <h1 className='text-center'>todo List app</h1>
    <Todoitems items={this.state.items} deletItem={this.deletItem} />
    <Additems addItem={this.addItem} Not_add={this.Not_add} />
  
    </div>
  );
}
}
export default App;
