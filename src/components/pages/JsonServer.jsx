
import { useEffect } from "react";
import { useState } from "react";
import { productsInstance } from "../../api/productsInstance";

const JsonServer = () => {
  const [products, setProducts] = useState([]);
  const [isChangeProducts, setIsChangeProducts] = useState(false);

  useEffect(() => {
    setIsChangeProducts(false);
    const getProducts = productsInstance.get("/products");
    getProducts.then((res) => setProducts(res.data));
  }, [isChangeProducts]);

  // CREAR
  const createProduct = () => {
    // fetch("http://localhost:5000/products", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     title: "nueva",
    //     price: 22,
    //     description: "probando post",
    //     img: "https://res.cloudinary.com/dnqfh2chg/image/upload/v1686581567/images_teykwq.jpg",
    //     stock:5,
    //     category: "deportivas",
    //   }),
    // });
    productsInstance.post("/products", {
      title: "nueva",
      price: 22,
      description: "probando post",
      img: "https://res.cloudinary.com/dnqfh2chg/image/upload/v1686581567/images_teykwq.jpg",
      stock: 5,
      category: "deportivas",
    });

    setIsChangeProducts(true);
  };

  // ACTUALIZAR
  const updateProduct = (id) => {
    productsInstance.patch(`/products/${id}`, {
      title: "modificado",
    });
    setIsChangeProducts(true);
  };

  // ELIMINAR

  const deleteProduct = (id) => {
    productsInstance.delete(`/products/${id}`);
    setIsChangeProducts(true);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", padding: 20 }}>json server y productsInstance</h1>
      <button onClick={createProduct}>Crear nuevo</button>
      {products.map((product) => (
        <div key={product.id}>
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={() => deleteProduct(product.id)}>eliminar</button>
          <button onClick={() => updateProduct(product.id)}>modificar</button>
        </div>
      ))}
    </div>
  );
};

export default JsonServer;
