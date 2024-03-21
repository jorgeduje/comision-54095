

const ProductCard = ( props ) => {

    const {titulo, descripcion, precio} = props

  return (
    <div>
          <h3>{titulo}</h3>
          <h4>{descripcion}</h4>
          <h4>{precio}</h4>
    </div>
  )
}

export default ProductCard

// const sumar = ( a, b )=>{
//     return a + b
// }

// sumar(1, 2)
// sumar(2, 5)
// sumar(3, 5)