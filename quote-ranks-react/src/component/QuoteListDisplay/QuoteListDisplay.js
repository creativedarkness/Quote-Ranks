import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Link,
} from 'react-router-dom';
import {upVoteQuote} from '../../redux';

class QuoteListDisplay extends Component {

    handleUpVote = (id) => {

    }
    render() {
        console.log("QuoteList props", this.props);
        return (
            <div className='QuoteListDisplay'>
                <Link to='/home'>Home</Link>
                <Link to='/write/:id'>Add a quote</Link>
                <p>Quotes by {this.props.selectedAuthor.name}:</p>
                <table>
                    <tbody>
                        <tr>
                            <th>Author</th>
                            <th>Votes</th>
                            <th>Actions available</th>
                        </tr>
                        {this.props.selectedQutoes.map((quote, index) => {
                            console.log("maped quotes", quote);
                            return(
                                <tr key={index}>
                                <td> {quote.quote} </td>
                                <td> {quote.votes} </td>
                                <td>
                                    <button className="upVoteButton" onClick={() => {this.handleUpVote(quote.quoteID)}}>Vote Up</button>
                                    <button className="downVoteButton" >Vote Down</button>
                                    <button className="deleteButton" >Delete</button>
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
    selectedQutoes: state.selectedQutoes,
    selectedAuthor: state.selectedAuthor,
})

const mapDispatchToProps = (dispatch) => ({
    upVoteQuote: (quoteId) => dispatch(upVoteQuote(quoteId)),

})


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(QuoteListDisplay)