import React, { Component } from 'react'

class AddAForm extends Component {


    constructor(props) {
        super(props);
        this.state = {todoText: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.someFn = this.someFn.bind(this);
      }
    
      handleChange(event) {
        this.setState({todoText: event.target.value});
      }
      someFn() {
        this.props.pfn(this.props.text); // 传给父组件了
    }
        
      handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.todoText);
        //event.preventDefault();
        
        if(this.props.text == "A"){
            this.props.addItem(<div >{this.props.text}+{this.state.todoText}</div>);
            this.refs.comment.value = '';
        }else if (this.props.text == "B"){
            this.props.addItem(<div >{this.props.text}+{this.state.todoText}</div>);
            this.refs.comment.value = '';
        }


      }
  
    render() {
        return (
           
            <div>
                <input type="text" ref="comment"style={{width:'75%'}}
                    //value={this.state.todoText} 
                    onChange={this.handleChange}/>
                <button style={{width:'20%'}}
                    onClick={(event) => { this.handleSubmit(event); this.someFn();}}>{this.props.text}</button>
            </div>
        )
    

    }
}

export default AddAForm