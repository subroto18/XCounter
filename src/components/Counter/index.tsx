import { Component } from "react";
import Button from "../../ui/Button";

class Counter extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="parent">
        <h1 className="heading">Counter App</h1>
        <p>Count: {this.state.count}</p>
        <Button onClick={this.increment} label="Increment" />
        <Button onClick={this.decrement} label="Decrement" />
      </div>
    );
  }
}

export default Counter;
