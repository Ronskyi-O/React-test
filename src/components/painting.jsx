export default function Painting(props) {
  const {title, price} = props
  return (
    <div>
      <img src="" alt="" width="480" />
      <h2>{props.title}</h2>
      <p>
        Author: <a href=""></a>
      </p>
      <p>Price: {props.price} $</p>
      <p>Avilabilety: ......</p>
      <button type='button' >Add to chart</button>
    </div>
  )
}