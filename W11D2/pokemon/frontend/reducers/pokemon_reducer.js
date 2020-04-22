import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON} from '../actions/pokemon_actions';

const pokemonReducer = (state={}, action)=>{
    Object.freeze(state);
    const nextState = Object.assign({},state);
    switch (action.type) {

        case RECEIVE_ALL_POKEMON:
            return action.pokemon;
        case RECEIVE_POKEMON:
            debugger
            nextState[action.pokemon.id] = action.pokemon
        default:
            return state;
    }
}
// const itemsReducer = (state={}, action)=>{
//  Object.freeze(state);
//     const nextState = Object.assign({},state);
//     switch (action.type) {
//         case RECEIVE_POKEMON:
//             nextState["entities"]["items"] = action.items
//         default:
//             return state;
//     }
// }
   
export default pokemonReducer;