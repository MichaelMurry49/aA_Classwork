import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root.jsx'
import {RECEIVE_ALL_POKEMON} from './actions/pokemon_actions.js'
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions.js'
import {fetchAllPokemon} from './util/api_util.js'
import configureStore from './store/store.js'
import {selectAllPokemon} from './reducers/selectors.js'
window.selectAllPokemon = selectAllPokemon;
window.requestAllPokemon = requestAllPokemon;
window.receiveAllPokemon = receiveAllPokemon;
window.fetchAllPokemon = fetchAllPokemon;
document.addEventListener("DOMContentLoaded", ()=>{
    const store = configureStore();
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
}) 