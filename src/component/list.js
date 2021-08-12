import React from 'react';
import Element from './element';

class List extends React.Component {
    handleDelete = (idx) => {
        if (this.props.list[idx].status === 'delete')
            this.props.list.splice(idx,1);
        else
            this.props.list[idx].status = 'delete';
        this.props.change(this.props.list);
    }
    handleChange = (idx, val) => {
        this.props.list[idx].content = val;
        this.props.change(this.props.list);
    }
    handleCheck = (idx) => {
        if (this.props.list[idx].status === 'pending') this.props.list[idx].status = 'done';
        else if (this.props.list[idx].status === 'done') this.props.list[idx].status = 'pending';
        else this.props.list[idx].status = 'pending';
        this.props.change(this.props.list);
    }
    render() {
        return (
            <ul>
                {
                    this.props.list.map((val, i) => {
                        return <Element key={i} id={i} val={val} delete={this.handleDelete} change={this.handleChange} check={this.handleCheck}></Element>
                    }).filter((ele => ele.props.val.status === this.props.choose))
                }
            </ul>
        )
    }
}

export default List;