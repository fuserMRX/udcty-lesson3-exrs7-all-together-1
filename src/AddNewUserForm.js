import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddNewUserForm extends Component {
    static propTypes = {
        error: PropTypes.string.isRequired,
        addUser: PropTypes.func.isRequired
    }

    state = this.getInitialState();

    getInitialState() {
        return {
            user: {
                firstName: '',
                lastName: '',
                userName: '',
                numberOfGames: 0,
                numberOfGamesHidden: '*'
            }
        }
    }

    updateStateName = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState((prevState) => ({
            user: {
                ...prevState.user,
                [name]: value
            }
        }))
        this.inputIsEmpty();
    };

    inputIsEmpty = () => {
        const userObjValues = Object.values(this.state.user);
        let noValue = userObjValues.some(value => value === '');
        return noValue;
    };

    clearForm = (e) => {
        e.preventDefault();
        const initState = this.getInitialState();
        this.setState((prevState) => ({
            user: {
                ...initState.user,
            }
        }));
    }



    render() {
        return (
            <form onSubmit={this.clearForm}>
                <input
                    type='text'
                    name='firstName'
                    value={this.state.user.firstName}
                    onChange={this.updateStateName}
                /><br />
                <input
                    type='text'
                    name='lastName'
                    value={this.state.user.lastName}
                    onChange={this.updateStateName}
                /><br />
                <input
                    type='text'
                    name='userName'
                    value={this.state.user.userName}
                    onChange={this.updateStateName}
                /><br />
                {this.props.error && (<p className='error'>{this.props.error}</p>)}
                <button onClick={() => this.props.addUser(this.state.user)} disabled={this.inputIsEmpty()}>Add</button>
            </form>
        )
    }
}

export default AddNewUserForm;
