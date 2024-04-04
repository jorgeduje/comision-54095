const ProductCard = ({ titulo, descripcion, precio }) => {
  return (
    <div>
      <h3>{titulo}</h3>
      <h4>{descripcion}</h4>
      <h4>{precio}</h4>
    </div>
  );
};

export default ProductCard;
