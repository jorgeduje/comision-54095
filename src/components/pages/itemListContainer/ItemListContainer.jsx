import ProductCard from "../../common/productCard/ProductCard";

const ItemListContainer = () => {
  return (
    <div>
      <h1>Bienvenidos a mi tienda</h1>

      {/* ACA VAN A IR LAS TARJETAS */}

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          backgroundColor: "steelblue",
        }}
      >
        <ProductCard
          precio={200}
          titulo={"titulo 1"}
          descripcion={"descripcion 1"}
        />
        <ProductCard
          precio={300}
          titulo={"titulo 2"}
          descripcion={"descripcion 2"}
        />
        <ProductCard
          precio={400}
          titulo={"titulo 3"}
          descripcion={"descripcion 3"}
        />
      </div>
    </div>
  );
};

export default ItemListContainer;
