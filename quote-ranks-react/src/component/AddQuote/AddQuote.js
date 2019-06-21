import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Link,
} from 'react-router-dom';
import { addNewQuote } from '../../redux';

class AddQuote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: '',
        }
    }

    handleChagne = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addNewQuote(this.state.quote, this.props.id);
        console.log("data submit:");
        this.props.history.push(`/quotes/${this.props.id}`)
    }

    render() {
        console.log("AddQuote props", this.props);
        // console.log(this.state);
        return (
            <div className='AddQuote'>
                <Link to='/home'>Home</Link>
                <p>Provider a qote by {this.props.author}</p>
                <form className='addNewForm' onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input type='text' name='quote' onChange={this.handleChagne} value={this.state.quote} />
                    <br />
                    <input type='button' className='formButton' value='Cancel' onClick={() => { this.props.history.push(`/quotes/${this.props.id}`) }} />{/* redirect back to /quotes/:id */}
                    <input type="submit" className='formButton' value='Submit' />{/* redirect back to /home */}
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    id: state.selectedAuthor.id,
    author: state.selectedAuthor.name,
})

const mapDispatchToProps = (dispatch) => ({
    addNewQuote: (quote, id) => dispatch(addNewQuote(quote, id)),

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddQuote)