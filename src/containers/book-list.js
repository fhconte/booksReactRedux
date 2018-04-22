// Node Modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import { selectBook } from '../actions/index';


class BookList extends Component {
    
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    className="list-group-item" 
                    onClick={() => this.props.selectBook(book)}
                    key={book.title}>
                        {book.title}
                </li>
            );
        });
    }
    
    render() {
        // Sempre que é retornado, ira acessar as Props de BookList
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    };
}

// Tudo retornado desta funcao sera passado como props para BookList container
function mapDispatchToProps(dispatch) {
    // Sempre que selectBook é chamada o resultado deve ser passado para todos reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// Make BookList container (it needs to know about dispatch). Make selectBook available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);