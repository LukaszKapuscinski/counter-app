import React, { Component } from "react";

class Counter extends Component {
  state = {
      count: 0,
      value: this.props.value
    

  };

hendleIncrement = ()=> {
    this.setState({count:this.state.value+1}); 
}

  render() {

    return (
      <>
      {this.props.children}
        <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button 
        onClick={this.hendleIncrement}
        className="btn btn-secondary btn-sm">Increment
        </button>
        <button onClick={this.handleDelete} className="btn btn-danger btn-sm m-2">Delete</button>
        
        </div>
      </>
    );
  }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

  formatCount() {
    const { count } = this.state;
    const x = <h1>Zero</h1>;
    return count === 0 ? x : count;
  }
}

export default Counter;
