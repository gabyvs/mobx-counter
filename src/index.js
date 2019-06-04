import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { observable, decorate } from 'mobx';
import { observer } from 'mobx-react';
import './index.css';

const appState = observable({
  count: 0
});

appState.increment = function () {
  this.count++;
};

appState.decrement = function () {
  this.count--;
};

const Counter = observer(class Counter extends Component {
  handleDecrement = () => { this.props.store.decrement(); };

  handleIncrement = () => { this.props.store.increment(); };

  render() {
    return (
      <div className="container">
        Counter: {this.props.store.count}<br />
        <button onClick={this.handleDecrement}>-</button>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
});

decorate(Counter, {
  count: observable
});

ReactDOM.render(<Counter store={appState}/>, document.getElementById('root'));
