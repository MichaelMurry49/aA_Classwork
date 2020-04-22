import React from 'react'
class PokemonIndex extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.requestAllPokemon()
    }

    render(){
        return(
            <ul>
                {this.props.pokemon.map(poke=>{
                    
                    return (<li><img src={poke.image_url} height="20px" width="20px"/> {poke.name}</li>)
                })}
            </ul>
        )
    }

}

export default PokemonIndex;