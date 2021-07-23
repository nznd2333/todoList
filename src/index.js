import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Todo extends React.Component {
  constructor(props) {
    super(props);
    //this.list = [{ id: 1, content: "2333", finish: true }, { id: 2, content: "3333", finish: false }, { id: 3, content: "4333", finish: true }];
    //this.state={list:[{ id: 1, content: "2333", finish: true }, { id: 2, content: "3333", finish: false }, { id: 3, content: "4333", finish: true }],input:""};
    this.state = JSON.parse(localStorage.getItem('todolist')) || { list: [], input: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.input !== "") {
      let _list = this.state.list;
      _list.push({ id: _list.length, content: this.state.input, finish: false });
      this.setState({ list: _list, input: "" });
      document.querySelector('#input').value = "";
    }
  }
  handleChange = (e) => {
    if (e.target.id === "input") {
      this.setState({ input: e.target.value });
    } else {
      let _list = this.state.list;
      _list[e.target.id].content = e.target.textContent;
      this.setState({ list: _list });
    }
  }
  handleCheckbox = (e) => {
    let _list = this.state.list;
    _list[e.target.id].finish = !_list[e.target.id].finish;
    this.setState({ list: _list });
  }
  handleDelete = (e) => {
    let _list = this.state.list;
    _list.splice(e.target.id, 1);
    this.setState({ list: _list });
  }
  render() {
    let list = this.state.list;
    localStorage.setItem('todolist', JSON.stringify(this.state));
    return (
      <div>
        <h1>TodoLists</h1>
        <form>
          <input type="text" id="input" onChange={this.handleChange}></input>
          <button onClick={this.handleSubmit}>submit</button>
        </form>
        <ul>
          {list.length > 0 ? list.map((cur, idx) => {
            cur.id = idx;
            return (<li key={idx}>
              <input type="checkbox" checked={cur.finish} onChange={this.handleCheckbox} id={cur.id}></input>
              <span contentEditable={true} suppressContentEditableWarning={true} id={cur.id} className={cur.finish ? "isfinish" : "notfinish"} onBlur={this.handleChange} >{cur.content}</span>
              <button onClick={this.handleDelete} id={cur.id}>delete</button>
            </li>)
          }) : <p>click submit tos add Todo</p>}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <Todo />,
  document.getElementById('root')
);
