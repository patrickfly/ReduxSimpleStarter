import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component{
    renderList(){
        return this.props.books.map((book) =>{
            return(
                <li 
                    key={book.title} 
                    onClick={() => this.props.selectBook(book)}
                    classNeme="list-group-item">{book.title}</li>
            );
        });
    }

    render(){
        return(
            <ul classNeme="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state){
    return{
        books: state.books
    };
}

function mapDispatchToProps(dispatch){
    //redux
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

//react-redux
export default connect(mapStateToProps, mapDispatchToProps)(BookList);