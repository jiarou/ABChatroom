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
       Bdata:[],
      someKey:"A"
      }
    this.handleAItem = this.handleAItem.bind(this);
    this.handleBItem = this.handleBItem.bind(this);
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

  handleBItem(event) {
    var items = this.state.Bdata;
    items.push({
      id: items.length + 1,
      data: event
    });
    this.setState({Bdata: items});
  }




  render() {

    // let changetoA;
    // let changetoB;
    //   if(this.state.someKey=="A") { 
    //     changetoA = (
       
    //       <ItemsTool text="A" items={this.state.itemsdata}/>    
               
    //     )
    //     changetoB = (
         
    //       <ItemsTool items={this.state.itemsdata}/>       
        
    //     )
    //     console.log('123')
    //    }else if (this.state.someKey=="B"){
    //     changetoA = (
          
    //       <ItemsTool text="right" items={this.state.itemsdata}/>  
         
    //     )   
    //     changetoB = (
          
    //       <ItemsTool items={this.state.itemsdata}/>       
        
    //     )
    //     console.log('345')
    //    }

    return (
      <div>
       
         <HelloWorld text={this.state.someKey} /> 
        <div style={{float : 'left',width:'50%',backgroundColor: 'LIGHTCYAN'}}>
          <div>A's chatroom</div>
            <div>
            <ItemsTool text={this.state.someKey} items={this.state.itemsdata}/>
            {/* {changetoA} */}
            </div>
          
          <AddAForm text="A"  pfn={this.fn} addAItem={this.handleAItem} addBItem={this.handleBItem}/>


        </div>
        <div style={{float : 'right',width:'50%',backgroundColor: 'LIGHTYELLOW' }}>
          <div>B's chatroom</div>
          <div>
          {/* {changetoB} */}
            <ItemsTool text={this.state.someKey} items={this.state.Bdata}/>
          </div>

          <AddAForm text="B" pfn={this.fn} addAItem={this.handleAItem} addBItem={this.handleBItem} />
        </div>
      </div>  

    )
    
  }
}

export default App
