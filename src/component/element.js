import React from 'react';

class Element extends React.Component {
  delete = () => {
    this.props.delete(this.props.id);
  }
  change = (e) => {
    this.props.change(this.props.id, e.target.textContent)
  }
  check = () => {
    this.props.check(this.props.id);
  }
  render() {
    return (
      <li>
        <input type="checkbox" checked={this.props.val.status === 'done'} onChange={this.check}></input>
        <span contentEditable={true} suppressContentEditableWarning={true} onBlur={this.change} >{this.props.val.content}</span>
        <button onClick={this.delete}>{this.props.val.status==='delete'?'remove':'delete'}</button>
      </li>
    )
  }
}

export default Element;