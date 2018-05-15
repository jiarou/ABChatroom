import React, { Component } from 'react'

class ItemsTool extends Component {

    render() {
          var abfield =this.props.text;

           var displayItems = this.props.items.map(function(item) {
           
              return (              
              <div style={{textAlign: abfield === item.user? "left":"right"}} key={item.id}>{item.data}</div>        
            );
                  });      
           

        return (
            <div>              
                    {displayItems}               
            </div>
        );
    }
}

export default ItemsTool