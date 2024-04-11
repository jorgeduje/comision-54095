import { usePaginate } from "../../hooks/usePaginate";

const Tablas = ({ data, itemsPerPage, changeItemsPerPage }) => {
  const { currentData, currentPage, paginate, totalPages } = usePaginate(
    data,
    itemsPerPage
  );

  return (
    <div>
      {currentData.map((el) => (
        <div key={el.id}>
          <h3>{el.nombre}</h3>
        </div>
      ))}

      <select onChange={(e)=> changeItemsPerPage(e.target.value)}>
        <option label="5" value={5}  />
        <option label="10" value={10} />
        <option label="15" value={15} />
      </select>

      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      >
        anterior
      </button>
      <span>
        estas en la pagina {currentPage} de un total de {totalPages}
      </span>
      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        siguiente
      </button>
    </div>
  );
};

export default Tablas;
