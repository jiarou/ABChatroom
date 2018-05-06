import React, { Component } from 'react'
import HelloWorld from './HelloWorld'
import ItemsTool from './ItemsTool'
import AddAForm from './AddAForm'
import AddBForm from './AddBForm'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       itemsdata:[
       
       ],
       Bdata:[
       
       ]
      }
    this.handleAItem = this.handleAItem.bind(this);
    this.handleBItem = this.handleBItem.bind(this);
  }

  handleAItem(event) {
    var items = this.state.itemsdata;
    items.push({
      id: items.length + 1,
      data: event
    });
    this.setState({itemsdata: items});
  }

  handleBItem(event) {
    var Bitems = this.state.Bdata;
    Bitems.push({
      id: Bitems.length + 1,
      data: event
    });
    this.setState({Bdata: Bitems});
  }



  render() {

    return (
      <div>
        {/* <HelloWorld text="今天就開始學React!" /> */}
        <div style={{float : 'left',width:'50%',backgroundColor: 'LIGHTCYAN'}}>
          <div>A's chatroom</div>
          <ItemsTool items={this.state.itemsdata}/>
          <div style={{textAlign: 'right'}}>
            <ItemsTool  items={this.state.Bdata}/>
          </div>
          <AddAForm addItem={this.handleAItem}/>
        </div>
        <div style={{float : 'right',width:'50%',backgroundColor: 'LIGHTYELLOW' }}>
          <div>B's chatroom</div>
          <div style={{textAlign: 'right'}}>
            <ItemsTool  items={this.state.itemsdata}/>
          </div>
          <ItemsTool items={this.state.Bdata}/>
          <AddBForm addItem={this.handleBItem}/>
        </div>
      </div>  

    )
    
  }
}

export default App
