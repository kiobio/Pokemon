



function PokemonList({ pokemon }){
    

    return(
        <div>
            {pokemon.map((p, i) => (
                <div key={i}>
                    {p}

                </div>
            ))}
        </div>
    )
}
export default PokemonList