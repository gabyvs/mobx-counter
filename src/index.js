import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Counter extends Component {

  decrement = () => { this.count--; };

  increment = () => { this.count++; };

  render() {
    return (
      <div className="container">
        Counter: {this.count}<br />
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('root'));
