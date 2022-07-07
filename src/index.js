import React, { createElement } from "react";
import ReactDOM from "react-dom";

const tasks = [
  "take out the trash",
  "carrying on the trash",
  "take out the trash",
  "wash the dishes",
];
//creating  'ol' in createElement---> create a order list in React
const element = (
  <ol>
    {tasks.map((tasks, index) => 
      <li key={index}>{tasks}</li>
    )}
  </ol>
);

ReactDOM.render(element, document.getElementById("root"));
