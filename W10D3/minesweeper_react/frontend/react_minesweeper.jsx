import React from 'react';
import ReactDOM from 'react-dom';
import Game from './game';

function Root() {
    return (
        <div>
            <Game/>
        </div>
    )
}

document.addEventListener('DOMContentLoaded', () => {
    let root = document.getElementById('root');
    ReactDOM.render(<Root />, root);
    console.log(root);
    }
);

