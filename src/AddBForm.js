import React, { Component } from 'react'

class AddBForm extends Component {
    constructor(props) {
        super(props);
        this.state = {BText: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({BText: event.target.value});
      }
    
      handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.todoText);
        //event.preventDefault();
        this.props.addItem(this.state.BText);
        this.refs.comment.value = '';
      }
  
    render() {
        return (
           
            <div>
                <input type="text" ref="comment"
                    //value={this.state.todoText} 
                    onChange={this.handleChange}/>
                <button
                    onClick={this. handleSubmit}>B</button>
            </div>
        )
    

    }
}

export default AddBForm