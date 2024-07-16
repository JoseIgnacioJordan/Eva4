import AgregarProducto from "./AgregarProducto";
import BuscarProducto from "./BuscarProducto";
import OrdenarProductos from "./OrdenarProductos";

function NavLateral({ onAgregarProducto, productos, setProductosFiltrados}) {
  return (
    <div id="navLateral" className="vh-100 rounded  position-fixed z-3">

      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              <h3>Buscar Producto</h3>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <BuscarProducto productos={productos} setProductosFiltrados={setProductosFiltrados} />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
                <h3>Agregar Producto</h3>
              </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <AgregarProducto onAgregarProducto={onAgregarProducto}/>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
                <h3>Ordenar Producto</h3>
              </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <OrdenarProductos productos={productos} setProductosFiltrados={setProductosFiltrados} />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default NavLateral;
