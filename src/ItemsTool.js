import React, { Component } from 'react'

class ItemsTool extends Component {

    render() {
        var displayItems = this.props.items.map(function(item) {
            return (<li key={item.id}>{item.data}</li>);
        });

        return (
            <div>
                <ul>
                    {displayItems}
                </ul>
            </div>
        );
    }
}

export default ItemsTool