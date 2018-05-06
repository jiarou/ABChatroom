import React, { Component } from 'react'

class ItemsTool extends Component {

    render() {
        var displayItems = this.props.items.map(function(item) {
            return (<div key={item.id}>{item.data}</div>);
        });

        return (
            <div>              
                    {displayItems}               
            </div>
        );
    }
}

export default ItemsTool