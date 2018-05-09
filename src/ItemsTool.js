import React, { Component } from 'react'

class ItemsTool extends Component {

    render() {
          var dic =this.props.text;

           var displayItems = this.props.items.map(function(item) {
           
              return (<div style={{textAlign: dic }} key={item.id}>{item.data}</div>);
                  });      
           

        return (
            <div>              
                    {displayItems}               
            </div>
        );
    }
}

export default ItemsTool