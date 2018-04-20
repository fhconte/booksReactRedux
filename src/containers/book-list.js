import React, { Component } from 'react';
// import react-redux from 'react-redux';

export default class Booklist extends Component {
    
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li className="list-group-item" key={book.title}>
                    {book.title}
                </li>
            )
        });
    }
    
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}