import React, { Component } from 'react'

class AddAForm extends Component {
    constructor(props) {
        super(props);
        this.state = {todoText: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({todoText: event.target.value});
      }
    
      handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.todoText);
        //event.preventDefault();
        this.props.addItem("A:"+this.state.todoText);
        this.refs.comment.value = '';
      }
  
    render() {
        return (
           
            <div>
                <input type="text" ref="comment"style={{width:'75%'}}
                    //value={this.state.todoText} 
                    onChange={this.handleChange}/>
                <button style={{width:'20%'}}
                    onClick={this. handleSubmit}>A</button>
            </div>
        )
    

    }
}

export default AddAForm