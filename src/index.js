import React, { Component } from "react";
import ReactDOM from "react-dom";



class List extends Component {
  render() {
    return (
      <ol>
        {this.props.tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ol>
    );
  }
}
class Title extends Component {
  render() {
    return <h1> Task List</h1>;
  }
}
class Main extends Component {
  render() {
    return (
      <div>
        <Title />
        <List tasks={['mow the law', 'walk the dog']} />
        <List tasks={['hose the driveway', 'finish the laundry']} />
        <List />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
