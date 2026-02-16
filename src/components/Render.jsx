export default function Render(props){
  return (
    <>
      <h1>{props.Title}</h1>
      <img src={props.Poster}/>
      <p>{props.Type}</p>
      <p>{props.Year}</p>
    </>
  )
}