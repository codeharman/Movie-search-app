export default function Render(props){
  return (
    <div className="response">
      <img className="res-img" src={props.Poster}/>
      <div className="res-inside-cont">
        <h1 className="res-header">{props.Title}</h1>
          <p className="res-type">{props.Type}</p>
          <p className="res-year">{props.Year}</p>
      </div>
    </div>
  )
}