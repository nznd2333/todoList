import React from 'react';
import List from './lib/list'
import Choose from './lib/choose'
import Submit from './lib/submit';
import './TodoList.css'

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { choose: 'pending', list:(JSON.parse(localStorage.getItem('todolist')) || [])}
  }
  handleSubmit = (val) => {
    this.setState({ list: [...this.state.list, { content: val, status: 'pending' }] })
  }
  handleChangeList = (newList) => {
    this.setState({ list: newList });
  }
  handleChoose = (e) => {
    this.setState({choose:e.target.value})
  }
  render() {
    localStorage.setItem('todolist', JSON.stringify(this.state.list));
    return (
      <div>
        <Submit submit={this.handleSubmit}></Submit>
        <Choose choose={this.handleChoose}></Choose>
        <List list={this.state.list} choose={this.state.choose} change={this.handleChangeList}></List>
      </div>
    )
  }
}

export default Todo; 