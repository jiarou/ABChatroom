import React, { Component } from 'react'
import HelloWorld from './HelloWorld'
import ItemsTool from './ItemsTool'
import AddAForm from './AddAForm'
import styled from 'styled-components'



const Afield = styled.div`
float: left;
align-content: center;
margin-left: 15%;
margin-top: 100px;
width: 30%;
height:300px;
background-color: LIGHTCYAN;
-webkit-box-shadow: 3px 3px #f3d42e;
-moz-box-shadow: 3px 3px #f3d42e;
box-shadow: 3px 3px lightgrey;

`;


const Bfield = styled.div`
float: right;
align-content: center;
margin-right: 15%;
margin-top: 100px;
width: 30%;
height:300px;
background-color: LIGHTYELLOW;
-webkit-box-shadow: 3px 3px #f3d42e;
-moz-box-shadow: 3px 3px #f3d42e;
box-shadow: 3px 3px lightgrey;

`;

const Content = styled.div`
    overflow: scroll;
    height: 278px;

`;




class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
       itemsdata:[
  
       ],
      getABValue:""
      }
    this.getABfromFrom = this.getABfromFrom.bind(this);  
    this.handleAItem = this.handleAItem.bind(this);
  }

  getABfromFrom(ABvalue) { 
    this.setState({getABValue: ABvalue});
}

  handleAItem(event) {

    setTimeout(()=>{

  var items = this.state.itemsdata;
    items.push({
      id: items.length + 1,
      data: event,
      user: this.state.getABValue,
    });

    this.setState({itemsdata: items});
  },100)
 

  }

  render() {
    return (
      <div>
           {/* <HelloWorld text={this.state.getABValue} />  */}
         <Afield>    
          <div>A's chatroom</div>  
            <Content>          
            <ItemsTool text="A" items={this.state.itemsdata}/>  
            </Content>
            <AddAForm text="A"  getABdoor={this.getABfromFrom} addAItem={this.handleAItem} />  
        </Afield> 
        
       

        <Bfield> 
            <div>B's chatroom</div>
            <Content> 
            <ItemsTool text="B" items={this.state.itemsdata}/>    
            </Content>  
            <AddAForm text="B" getABdoor={this.getABfromFrom} addAItem={this.handleAItem}  />
        </Bfield> 
      </div>  

    )
    
  }
}

export default App
