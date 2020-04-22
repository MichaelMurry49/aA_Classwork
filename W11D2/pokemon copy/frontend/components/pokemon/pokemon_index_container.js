import { connect }   from "react-redux";
import {selectAllPokemon} from '../../reducers/selectors.js'
import PokemonIndex from './pokemon_index.jsx'

const mapStateToProps = (state) => ({
    pokemon: Object.values(selectAllPokemon(state))
});

const mapDispatchToProps = (dispatch) => ({
    requestAllPokemon: () => dispatch(requestAllPokemon()),

});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);