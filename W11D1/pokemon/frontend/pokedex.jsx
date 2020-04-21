import React from 'react'
import ReactDOM from 'react-dom'
import {RECEIVE_ALL_POKEMON} from './actions/pokemon_actions.js'
import { receiveAllPokemon } from './actions/pokemon_actions.js'
import {fetchAllPokemon} from './util/api_util.js'
import configureStore from './store/store.js'

window.receiveAllPokemon = receiveAllPokemon;
window.fetchAllPokemon = fetchAllPokemon;
document.addEventListener("DOMContentLoaded", ()=>{
    const store = configureStore();
    const root = document.getElementById('root');

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    ReactDOM.render(<div>React is working</div>, root);
})