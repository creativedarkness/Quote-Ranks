import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Link,
} from 'react-router-dom';
import { selectAuthorbyId, selectQutoesById } from '../../redux';
import './AuthorListDisplay.css';

class AuthorLisDisplay extends Component {

    handleEditClicked = (author, id) => {
        // console.log("passing to func - author", author.name);
        // console.log("passing to func - id", id);
        this.props.selectAuthorbyId(author.name, id);
        this.props.history.push(`/edit/${id}`);
    }

    handleViewClicked = (quotes, id) => {
        // console.log("passing to func - quotes", quotes);
        // console.log("passing to func - id", id);
        this.props.selectQutoesById(quotes, id);
        this.props.history.push(`/quotes/${id.id}`);
    }

    render() {
        console.log("AuthorLis", this.props.authors);

        return (
            <div className="AuthorListDisplay">
                <Link to='/new'>Add a quotable author</Link>
                <p>We have quotes by:</p>
                <table>
                    <tbody>
                        <tr>
                            <th>Author</th>
                            <th>Actions available</th>
                        </tr>
                        {this.props.authors.map((author, index) => {
                            // console.log("map - author", author);
                            // console.log("map-author.id", author.id);
                            return (
                                <tr key={index}>
                                    <td>{author.name}</td>
                                    <td>
                                        <button className="viewButton" onClick={(event) => { this.handleViewClicked(this.props.quotes, author) }}>View quotes</button>
                                        <button className="editButton" onClick={(event) => { this.handleEditClicked(author, author.id) }}>Edit</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    authors: state.authors,
    quotes: state.quotes,
})

const mapDispatchToProps = (dispatch) => ({
    selectAuthorbyId: (author, id) => dispatch(selectAuthorbyId(author, id)),
    selectQutoesById: (quotes, id) => dispatch(selectQutoesById(quotes, id)),
})


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AuthorLisDisplay)