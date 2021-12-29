import React, { Component } from 'react';

class Counter extends React.Component {
    
    state = {
        count: 0

    }

    render() { 
        return <div>
            <span>{this.formatCount()}</span>
            <button>Incriment</button>
            
        </div>;
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;  