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
        const response = await fetch(`https://www.omdbapi.com/?s=${query}&page=${page}&apikey=a3bef56a`)
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
    <div className="container">
      <div className="search">
        <form onSubmit={searchMovie}>
          <input className="search-input" value={query} onChange={(e) => setQuery(e.target.value)} type="text" placeholder="enter the movie name"/>
          <button className="search-btn" type="submit">Submit</button>
        </form>
      </div>
      <div className="render">
        {movies.map((movie) => (
          <Render 
          key={movie.imdbID}
          {...movie}/>
        ))}
      </div>
      <div className="btn-container">
        <button className="btn" onClick={() => setPage(prev => prev + 1)}>Next page</button>
        <button className="btn" onClick={() => setPage(prev => Math.max(prev - 1, 1))}>Last page</button>
      </div>
    </div>
  )
}