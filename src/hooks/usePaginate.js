import { useState } from "react";

export const usePaginate = (data, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage); // 3.2 --> 4

  const paginate = (numPage) => setCurrentPage(numPage);

  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage, // 5
    currentPage * itemsPerPage // 10 [5, 6, 7, 8, 9 ]
  );

  return {currentPage, totalPages, paginate, currentData };
};

// data.map() ---> todos
// currentData.map() ---> una parte

// const productos = [
//   { id: 1, nombre: "Producto 1" },
//   { id: 2, nombre: "Producto 2" },
//   { id: 3, nombre: "Producto 3" },
//   { id: 4, nombre: "Producto 4" },
//   { id: 5, nombre: "Producto 5" },
//   { id: 6, nombre: "Producto 6" },
//   { id: 7, nombre: "Producto 7" },
//   { id: 8, nombre: "Producto 8" },
//   { id: 9, nombre: "Producto 9" },
//   { id: 10, nombre: "Producto 10" },
//   { id: 11, nombre: "Producto 11" },
//   { id: 12, nombre: "Producto 12" },
//   { id: 13, nombre: "Producto 13" },
//   { id: 14, nombre: "Producto 14" },
//   { id: 15, nombre: "Producto 15" },
//   { id: 16, nombre: "Producto 16" },
//   { id: 17, nombre: "Producto 17" },
//   { id: 18, nombre: "Producto 18" },
//   { id: 19, nombre: "Producto 19" },
//   { id: 20, nombre: "Producto 20" },
//   { id: 21, nombre: "Producto 21" },
//   { id: 22, nombre: "Producto 22" },
//   { id: 23, nombre: "Producto 23" },
//   { id: 24, nombre: "Producto 24" },
//   { id: 25, nombre: "Producto 25" },
//   { id: 26, nombre: "Producto 26" },
//   { id: 27, nombre: "Producto 27" },
//   { id: 28, nombre: "Producto 28" },
//   { id: 29, nombre: "Producto 29" },
//   { id: 30, nombre: "Producto 30" },
//   { id: 31, nombre: "Producto 31" },
// ];
