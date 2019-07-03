import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #cc dotted',
      textDecoration: this.props.todo.completed ?
      'line-through': 'none'
    }
  }



  render(){
    const { id, title } = this.props.todo;
    return(
      <div style={ this.getStyle() }>
      <p>
      <input type="checkbox" onChange={this.props.markComplete.bind
        (this, id)}/> {''}
      {title}
      <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
      </p>

      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const btnStyle ={
  background: '#ff4081',

color: '#fff',

  borderRadius: '50%',

fontSize: '18px',

height: '45px',

margin: 'auto',

minWidth: '45px',

width: '45px',

padding: '0',

overflow: 'hidden',

boxShadow: '0 1px 1.5px 0 rgba(0,0,0,.12),0 1px 1px 0 rgba(0,0,0,.24)',

position: 'relative',

lineHeight: 'normal',
  float: 'right',
  border: 'none'



}


export default TodoItem
