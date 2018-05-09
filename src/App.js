import React, { Component } from 'react'
import HelloWorld from './HelloWorld'
import ItemsTool from './ItemsTool'
import AddAForm from './AddAForm'


class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
       itemsdata:[
  
       ],
      someKey:"A"
      }
    this.handleAItem = this.handleAItem.bind(this);
    this.fn = this.fn.bind(this);
  }

  fn(ABvalue) { 
    this.setState({ someKey: ABvalue});
}

  handleAItem(event) {
    var items = this.state.itemsdata;
    items.push({
      id: items.length + 1,
      data: event
    });
    this.setState({itemsdata: items});
  }



  render() {

    let changetoA;
    let changetoB;
      if(this.state.someKey=="A") { 
        changetoA = (
          <div style={{textAlign: 'left'}}>
          <ItemsTool  items={this.state.itemsdata}/>    
          </div>       
        )
        changetoB = (
          <div style={{textAlign: 'right'}}>
          <ItemsTool items={this.state.itemsdata}/>       
          </div>
        )
        console.log('123')
       }else if (this.state.someKey=="B"){
        changetoA = (
          <div style={{textAlign: 'right'}}>
          <ItemsTool  items={this.state.itemsdata}/>  
          </div>     
        )   
        changetoB = (
          <div style={{textAlign: 'left'}}>
          <ItemsTool items={this.state.itemsdata}/>       
          </div>
        )
        console.log('345')
       }

    return (
      <div>
       
         <HelloWorld text={this.state.someKey} /> 
        <div style={{float : 'left',width:'50%',backgroundColor: 'LIGHTCYAN'}}>
          <div>A's chatroom</div>
            <div>
            {/* <ItemsTool text={this.state.someKey} items={this.state.itemsdata}/> */}
            {changetoA}
            </div>
          
          <AddAForm text="A"  pfn={this.fn} addItem={this.handleAItem}/>


        </div>
        <div style={{float : 'right',width:'50%',backgroundColor: 'LIGHTYELLOW' }}>
          <div>B's chatroom</div>
          <div>
          {changetoB}
            {/* <ItemsTool text={this.state.someKey} items={this.state.itemsdata}/> */}
          </div>

          <AddAForm text="B" pfn={this.fn} addItem={this.handleAItem} />
        </div>
      </div>  

    )
    
  }
}

export default App
