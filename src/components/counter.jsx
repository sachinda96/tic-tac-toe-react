import React, { Component } from 'react';

class Counter extends React.Component {
    
    state = {
        count: 0,
        imageUrl:"https://northell.design/wp-content/uploads/2021/11/1pHsEux2h8wc3-yNCQNwz0A.jpeg"

    }

    render() { 
        return <div>
            <img src={this.state.imageUrl}></img>
            <span style={{fontSize:10}} className="badge badge-primary m-2">{this.formatCount()}</span>
            <button>Incriment</button>
            
        </div>;
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;  