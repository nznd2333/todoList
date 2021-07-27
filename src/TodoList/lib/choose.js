import React from 'react';

class Choose extends React.Component {
    render() {
      return (
        <select onChange={this.props.choose}>
          <option value='pending'>待办项</option>
          <option value='done'>已完成</option>
          <option value='delete'>删除项</option>
        </select>
      )
    }
  }

  export default Choose;