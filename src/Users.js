import React from 'react';
import PropTypes from 'prop-types';
import ToggleUsersGames from './ToggleUsersGames';

const Users = (props) => {
    const users = props.users;
    const showGames = props.showGames;

    return (
        <div>
            <ol>
                {users.map(user => (
                    <li key={user.userName}>{user.userName} played {showGames ? user.numberOfGames : user.numberOfGamesHidden} games</li>
                ))}
            </ol>
            <br/>
            {users.length > 0 && <ToggleUsersGames toggleUsersGames={props.toggleUsersGames} showGames={showGames}/>}
        </div>
    )
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    showGames: PropTypes.bool.isRequired,
    toggleUsersGames: PropTypes.func.isRequired
}

export default Users;

