import React, { Component } from 'react';

class Counter extends React.Component {
    
    state = {
        count: 0,
        imageUrl:"https://northell.design/wp-content/uploads/2021/11/1pHsEux2h8wc3-yNCQNwz0A.jpeg",
        tags : ['tag1','tag2','tag3']

    }

    render() { 
        return <div>
            <img src={this.state.imageUrl}></img>
            <span style={{fontSize:10}} className="badge badge-primary m-2">{this.formatCount()}</span>
            <button>Incriment</button>
            {this.state.tags.length === 0 && <p>Create New Tag</p>}
            {this.validateTags()}                  
        </div>;
    }

    validateTags(){
        if (this.state.tags.length == 0) return <p>There are no tags!</p>;

        return <ul>
        {this.state.tags.map(tag=> <li  key={tag}>{tag}</li>)}     
    </ul>;
    }


    formatCount(){
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;  