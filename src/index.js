import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { observable, decorate } from 'mobx';
import { observer } from 'mobx-react';
import './index.css';

const Counter = observer(class Counter extends Component {
  count = 0;

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
});

decorate(Counter, {
  count: observable
});

ReactDOM.render(<Counter />, document.getElementById('root'));
