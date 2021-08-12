import React from 'react';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = props.submit;
      this.state = { input: "" };
    }
    submit = (e) => {
      e.preventDefault();
      if (this.state.input === "") return;
      this.handleSubmit(this.state.input);
      this.setState({ input: "" });
      this.input.value = "";
    }
    change = (e) => {
      this.input = e.target;
      this.setState({ input: e.target.value });
    }
    render() {
      return (<div>
        <h1>TodoList</h1>
        <form>
          <input type="text" onChange={this.change}></input>
          <button onClick={this.submit}>submit</button>
        </form>
      </div>)
    }
  }

export default Form;