import React from 'react';
import Element from './element';

class List extends React.Component {
    handleDelete = (idx) => {
        if (this.list[idx].status === 'delete')
            this.list.splice(idx, 1);
        else
            this.list[idx].status = 'delete';
        this.props.change(this.list);
    }
    handleChange = (idx, val) => {
        this.list[idx].content = val;
        this.props.change(this.list);
    }
    handleCheck = (idx) => {
        if (this.list[idx].status === 'pending') this.list[idx].status = 'done';
        else if (this.list[idx].status === 'done') this.list[idx].status = 'pending';
        else this.list[idx].status = 'pending';
        this.props.change(this.list);
    }
    render() {
        this.choose = this.props.choose;
        this.list = this.props.list;
        let show = [];
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].status === this.choose) {
                show = [...show, <Element key={i} id={i} val={this.list[i]} delete={this.handleDelete} change={this.handleChange} check={this.handleCheck}></Element>]
            }
        }
        return (
            <ul>
                {show}
            </ul>
        )
    }
}

export default List;