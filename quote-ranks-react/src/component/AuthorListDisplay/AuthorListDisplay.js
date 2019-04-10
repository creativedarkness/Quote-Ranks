import React, { Component } from 'react';
import {
    BrowserRouter,
    Link,
} from 'react-router-dom';

class AuthorLisDisplay extends Component {
    render() {
        return (
            <div className="AuthorListDisplay">
                <BrowserRouter><Link to='/new'>Add a quotable author</Link></BrowserRouter>
                <p>We have quotes by:</p>
                <table>
                    <tbody>
                    <th>Author</th>
                    <th>Actions available</th>
                    <tr>
                        <td>author</td>
                        <td>actions</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AuthorLisDisplay