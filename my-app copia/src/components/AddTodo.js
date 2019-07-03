import React, { Component } from 'react';

export class AddTodo extends Component {
  state = {
    title: ''
  }

onSubmit = (e) =>{
  e.preventDefault();
  this.props.addTodo(this.state.title);
  this.setState({ title: ''});
}

onChange = (e) => this.setState({title: e.target.value});

  render(){
    return (
      <div>
      <form onSubmit={this.onSubmit}  style={{ display: 'flex'}}>
      <input
      type="text"
      name="title"
      style= {{flex: '10', padding: '5px'}}
      placeholder="Add Todo..."
      value={this.state.title}
      onChange={this.onChange}
      />
      <input
      type="submit"
      value="Submit"
      className="btn"
      style={{flex: '1',
      background: 'linear-gradient(to bottom, #E91E63 0%,#E91E63 100%)',
      border: 'none',
      borderRadius: '0PX',
      position: 'relative',
      color: '#fbfbfb',
      boxShadow: '0 14px 28px rgba(0,0,0,0.10), 0 10px 10px rgba(0,0,0,0.10)'

      }}
      />
      </form>
      </div>
    )
  }
}

export default AddTodo;
