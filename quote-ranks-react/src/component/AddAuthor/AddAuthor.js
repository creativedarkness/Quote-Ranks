import React, { Component } from 'react';
import {
    BrowserRouter,
    Link,
} from 'react-router-dom';

class AddAuthor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: ''
        }
    }
    render() {
        return (
            <div className='AddAuthor'>
                <BrowserRouter><Link to='/home'>Home</Link></BrowserRouter>
                <p>Add a new quotable author</p>
                <form className='addNewForm'>
                    <label>Name:</label>
                    <input type='text' name='author' value={this.state.author} />
                    <br />
                    <input type='button' className='formButton' value='Cancel' />{/* this needs to redirect back to /home */}
                    <input type="submit" className='formButton' value='Submit' />{/* this needs to redirect back to /home */}
                </form>
            </div>
        )
    }
}

export default AddAuthor