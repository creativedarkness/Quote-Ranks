import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
    Link,
} from 'react-router-dom';
import {updateAuthor} from '../../redux';

class UpdateAuthor extends Component {
    constructor (props) {
        super(props);
        this.state = {
            id: null,
            author: '',
        }
    }

    componentDidMount = () => {
        this.setState({
            id: this.props.author.id,
            author: this.props.author.name,

        })
    }

    handleChagne = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updateAuthor(this.state)
        console.log("data sumbited")
        this.props.history.push('/home')
    }

    render() {
        // console.log("UpdateAuthor props", this.props);
        console.log(this.state)

        return (
            <div className='UpdateAuthor'>
                <Link to='/home'>Home</Link>
                    <p>Edit {this.props.author.name}'s' name</p>
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

        const mapStateToProps = (state) => ({
            author: state.selectedAuthor,

        })  
        
        const mapDispatchToProps = (dispatch) => ({
            updateAuthor: (author) => dispatch(updateAuthor(author)),

        })

export default connect(
    mapStateToProps,
    mapDispatchToProps,
) (UpdateAuthor)