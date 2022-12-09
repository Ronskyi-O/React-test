import PropTypes from 'prop-types'

export default function Painting(props) {
  const {title, price} = props
  return (
    <div>
      <img src="" alt="" width="480" />
      <h2>{title}</h2>
      <p>
        Author: <a href=""></a>
      </p>
      <p>Price: {price} $</p>
      <p>Avilabilety: ......</p>
      <button type='button' >Add to chart</button>
    </div>
  )
}

Painting.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}