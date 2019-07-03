import React, { Component } from 'react';
import Todos from './components/Todos';
import SimpleAppBar from './components/layout/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';


import './App.css';

class App extends Component {

  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner with husband',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Meeting with boss',
        completed: false
      },
    ]
  }

markComplete = (id) =>{
this.setState ({ todos: this.state.todos.map(todo => {
  if(todo.id === id){
    todo.completed = !todo.completed
  }
  return todo;
}) });
}

delTodo = (id) => {
  console.log(id)
}

//Delete TODO
delTodo = (id)=>{
  this.setState({todos: [...this.state.todos.filter(todo=> todo.id !== id)]});
}

//Add TODO
addTodo = (title) => {
  const newTodo = {
    id: uuid.v4(),
    title,
    completed: false
  }
this.setState({todos: [...this.state.todos, newTodo] });
}

  render(){
  return (
    <div className="App">

    <SimpleAppBar />
    <AddTodo addTodo={this.addTodo}/>

      <Todos todos={this.state.todos} markComplete={this.markComplete}
      delTodo={this.delTodo} />

    </div>
  );
}
}

export default App;
