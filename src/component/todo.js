import React from 'react';
import List from './list'
import Form from './form';
import DropDown from './dropdown';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { choose: 'pending', list: [] }
  }
  callAPI() {
    fetch('http://localhost:3001/api', { method: 'GET' })
      .then((res) => res.json())
      .then(res => this.setState({ list: res }));
  }
  callPost(list) {
    fetch('http://localhost:3001/api', {
      method: 'POST',
      body: JSON.stringify(list),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
  }
  handleSubmit = (val) => {
    let newList = [...this.state.list, { content: val, status: 'pending' }]
    this.handleChangeList(newList);
  }
  handleChangeList = (newList) => {
    this.setState({ list: newList });
    this.callPost(newList);
  }
  handleChoose = (e) => {
    this.setState({ choose: e.target.value })
  }
  componentDidMount() {
    this.callAPI();
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <Form submit={this.handleSubmit}></Form>
        <DropDown choose={this.handleChoose}></DropDown>
        <List list={this.state.list} choose={this.state.choose} change={this.handleChangeList}></List>
      </div>
    )
  }
}

export default Todo;