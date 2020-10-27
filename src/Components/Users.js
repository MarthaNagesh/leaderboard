import React from 'react'

import './Users.css';

const Users = (props) => {
    
    return (
        <div className="container">
                <li className="users">{props.user}
                    <div className="button"> 
                        <button onClick={props.increment}>+</button> 
                        <button onClick={props.decrement}>-</button>
                    </div>
                    <div id="score"><strong>{props.points} </strong>points</div>
                </li>
        </div>
    );
};

export default Users;