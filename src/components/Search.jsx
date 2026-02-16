import React from "react"
import Render from './Render'

export default function Search(){

  const [query, setQuery] = React.useState("")
  const [movies, setMovies] = React.useState([])

  const searchMovie = async(e) => {

    e.preventDefault()

    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=a3bef56a`)
      const data = await response.json()
      console.log(data)

      setMovies(data.Search || [])
    }
    catch(err) {
       console.log('Error occured', err);
    }
  }

  return (
    <>
    <div>
      <form onSubmit={searchMovie}>
        <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" placeholder="enter the movie name"/>
        <button type="submit">Submit</button>
      </form>
    </div>
      {movies.map((movie) => (
        <Render 
        key={movie.imdbID}
        {...movie}/>
      ))}
    </>
  )
}