import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx';
import {RECEIVE_ALL_POKEMON} from './actions/pokemon_actions.js';
import { RECEIVE_POKEMON } from './actions/pokemon_actions.js';
import { receiveAllPokemon, requestAllPokemon, requestPokemon, receivePokemon } from './actions/pokemon_actions.js';
import {fetchAllPokemon} from './util/api_util.js';
import configureStore from './store/store.js';
import {selectAllPokemon} from './reducers/selectors.js';
import {HashRouter, Route} from "react-router-dom";
window.selectAllPokemon = selectAllPokemon;
window.requestAllPokemon = requestAllPokemon;
window.receiveAllPokemon = receiveAllPokemon;
window.fetchAllPokemon = fetchAllPokemon;
window.requestPokemon = requestPokemon;
window.receivePokemon = receivePokemon;
document.addEventListener("DOMContentLoaded", ()=>{
    const store = configureStore();
    const root = document.getElementById('root');
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    ReactDOM.render(<Root store={store}/>, root);
}) 