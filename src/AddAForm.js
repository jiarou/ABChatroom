import React, { Component } from 'react'
import styled from 'styled-components'



class AddAForm extends Component {


    constructor(props) {
        super(props);
        this.state = {todoText: ''};

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.sentABAValue = this.sentABAValue.bind(this);
        this.handleChange = (event)=>{
            this.setState({todoText: event.target.value});
          }

        this.sentABAValue= () => {
            this.props.getABdoor(this.props.text); // 传给父组件了
        }

        this.handleSubmit = (event) => {
            this.props.addAItem(<div>{this.props.text}:{this.state.todoText}</div>);
            this.refs.comment.value = '';
      }

      }


    render() {
        return (
           
            <div>
                <input type="text" ref="comment"style={{width: '77.5%',marginTop: '10px',borderColor: 'black'}}
                    //value={this.state.todoText} 
                    onChange={this.handleChange}/>
                <button style={{width:'20%',backgroundColor: 'lightgrey'}}
                    onClick={(event) => { this.handleSubmit(event); this.sentABAValue();}}>{this.props.text}</button>
            </div>
        )
    

    }
}

export default AddAForm