import React from "react"
import Render from './Render'

export default function Search(){

  const [query, setQuery] = React.useState("")
  const [movies, setMovies] = React.useState([])
  const [page, setPage] = React.useState(1)

    const searchMovie = (e) => {

    e.preventDefault()
    
    setPage(1)

  }

  React.useEffect(() => {

    const fetchMovies = async(e) => {

      try {
        const response = await fetch(`http://www.omdbapi.com/?s=${query}&page=${page}&apikey=a3bef56a`)
        const data = await response.json()
        console.log(data)

        setMovies(data.Search || [])
      }
      catch(err) {
        console.log('Error occured', err);
      }
    }
    if (query){
      fetchMovies()
    }
  }, [page, query])

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
      <button onClick={() => setPage(prev => prev + 1)}>next page</button>
      <button onClick={() => setPage(prev => Math.max(prev - 1, 1))}>Last page</button>
    </>
  )
}