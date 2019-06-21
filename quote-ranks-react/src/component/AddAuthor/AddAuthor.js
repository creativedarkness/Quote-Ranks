import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
    Link,
} from 'react-router-dom';
import {addNewAuthor} from '../../redux';

class AddAuthor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: ''
        }
    }

    handleChagne = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // this.props.addNewAuthor(this.state.author)
        // console.log("data submitted:", this.state.author);
        // this.props.history.push('/home');

    }
    render() {
        // console.log("AddAuthor props",this.props);
        // console.log("Add Author props",this.state.author);
        return (
            <div className='AddAuthor'>
                <Link to='/home'>Home</Link>
                <p>Add a new quotable author</p>
                <form className='addNewForm' onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input type='text' name='author'onChange={this.handleChagne} value={this.state.author} />
                    <br />
                    <input type='button' className='formButton' value='Cancel' onClick={() => {this.props.history.push('/home')}} />{/* redirect back to /home */}
                    <input type="submit" className='formButton' value='Submit' />{/* redirect back to /home */}
                </form>
            </div>
        )
    }
}

const mapDispatchToState = (dispatch) => ({
    addNewAuthor: (author) => dispatch(addNewAuthor(author)),
})

export default connect(
    null,
    mapDispatchToState,
) (AddAuthor)