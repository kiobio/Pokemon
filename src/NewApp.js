import { useEffect, useState } from 'react';
import './App.css';
import PokemonList from './PokemonLisr';
import axios from 'axios';
import Pagination from './Pagination';


function NewApp() {

  const [pokemon, setPokemon] = useState([])
  const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPage, setnextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [loading, setLoading] = useState(true);


  useEffect( () => {
    setLoading(true)
    let cancel
  axios.get(currentPage, {
    cancelToken: new axios.CancelToken(c => cancel = c)
  }).then(response => {
    setLoading(false)
    setnextPage(response.data.next)
    setPrevPage(response.data.previous)
    setPokemon(response.data.results.map(p => p.name))
  })

    return () =>cancel()

  }, [currentPage]) 

  function goToNextPage(){
    setCurrentPage(nextPage)
  }

  function goToPrevPage(){
    setCurrentPage(prevPage)
  }

  if(loading) return(
    <div>
      loading
    </div>
  )
  
  

  return (
    <div className="column">
      
      <PokemonList 
      pokemon = {pokemon}
      />
      <Pagination
      goToNextPage={nextPage ? goToNextPage : null }
      goToPrevPage={prevPage? goToPrevPage : null }
      />
    </div>
  );
}

export default NewApp;
