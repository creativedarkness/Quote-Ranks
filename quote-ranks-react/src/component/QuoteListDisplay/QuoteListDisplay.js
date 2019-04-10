import React, { Component } from 'react';
import {
    BrowserRouter,
    Link,
} from 'react-router-dom';

class QuoteListDisplay extends Component {
    render() {
        return (
            <div className='QuoteListDisplay'>
                <BrowserRouter>
                    <Link to='/home'>Home</Link>
                    <Link to='/write/:id'>Add a quote</Link>
                </BrowserRouter>
                <p>Quotes by AUTHOR:</p>
                <table>
                    <tbody>
                    <th>Author</th>
                    <th>Votes</th>
                    <th>Actions available</th>
                    <tr>
                        <td>quote</td>
                        <td>vote counter</td>
                        <td>actions</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default QuoteListDisplay