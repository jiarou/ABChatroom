import React, { Component } from 'react'
import styled from 'styled-components'


const Test = styled.h1`
font-size: 1.5em;
height:100px;
color: red;
`;


class HelloWorld extends Component {
    render() {
        console.log(this.props.text);
        
        return <div><Test>{this.props.text}</Test></div>
       
    }
}

export default HelloWorld