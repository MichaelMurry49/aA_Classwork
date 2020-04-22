import * as APIUtil from '../util/api_util.js'
export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON"
export const RECEIVE_POKEMON = "RECEIVE_POKEMON"
export const receiveAllPokemon = (pokemon) => {
    return {
        type: RECEIVE_ALL_POKEMON,
        pokemon
    }
}

export const receivePokemon = (payload) => {
    debugger
    return {
        type: RECEIVE_POKEMON,
        pokemon: payload.pokemon,
        items: payload.items
    }
}

export const requestAllPokemon = () => (dispatch) => (
    APIUtil.fetchAllPokemon()
        .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

export const requestPokemon = (id) => (dispatch) => (
    APIUtil.fetchPokemon(id)
        .then((payload) => dispatch(receivePokemon(payload)))
)