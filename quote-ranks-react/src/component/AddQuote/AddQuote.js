import React, { Component } from 'react';
import {
    BrowserRouter,
    Link,
} from 'react-router-dom';

class AddQuote extends Component {
    render() {
        return (
            <div className='AddQuote'>
                <BrowserRouter><Link to='/home'>Home</Link></BrowserRouter>
                <p>Provider a qote by AUTHOR</p>
                <form className='addNewForm'>
                    <label>Quote:</label>
                    <input type='text' name='author' value={this.state.author} />
                    <br />
                    <input type='button' className='formButton' value='Cancel' /> {/* this needs to redirect back to QuoteListDisplay */}
                    <input type="submit" className='formButton' value='Submit' />{/* this needs to redirect back to QuoteListDisplay */}
                </form>
            </div>
        )
    }
}

export default AddQuote