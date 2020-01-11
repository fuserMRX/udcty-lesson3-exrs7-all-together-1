import React from 'react';
import PropTypes from 'prop-types';


const ToggleUsersGames = (props) => {
    const message1 = 'Hide the Number of Games Played';
    const message2 = 'Show the Number of Games Played';
    const showGames = props.showGames;
    return (
        <button className='smallButton' onClick={props.toggleUsersGames}>{showGames ? (message1) : (message2)}</button>
    );
}

ToggleUsersGames.propTypes = {
    toggleUsersGames: PropTypes.func.isRequired,
    showGames: PropTypes.bool.isRequired
}

export default ToggleUsersGames;
