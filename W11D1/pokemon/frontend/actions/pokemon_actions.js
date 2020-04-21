export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON"
export const receiveAllPokemon = (payload) => {
    return {
        type: RECEIVE_ALL_POKEMON,
        payload
    }
}