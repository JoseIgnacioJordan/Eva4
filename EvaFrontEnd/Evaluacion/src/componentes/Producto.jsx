import { useState } from "react";

function Producto({ src, alt, title, description, precio, categoria, onEliminar, onActualizar, id }) {
  const [estado, setEstado] = useState(true);
  const [editando, setEditando] = useState(false);
  const [nuevoTitulo, setNuevoTitulo] = useState(title);
  const [nuevaDescripcion, setNuevaDescripcion] = useState(description);
  const [nuevoPrecio, setNuevoPrecio] = useState(precio);
  const [nuevaCategoria, setNuevaCategoria] = useState(categoria);

  function eliminarProducto() {
    const confirmacion = window.confirm("¿deseas confirmar la eliminacion?");
    if (confirmacion) {
      setEstado(false);
      onEliminar();
    }
  }

  function modificarProducto() {
    setEditando(true);
  }

  function cancelarModificacion() {
    setEditando(false);
    setNuevoTitulo(title);
    setNuevaDescripcion(description);
    setNuevoPrecio(precio);
    setNuevaCategoria(categoria);
  }

  function guardarModificacion() {
    const nuevoProducto = {
      id,
      nombre: nuevoTitulo,
      description: nuevaDescripcion,
      precio: nuevoPrecio,
      categoria: nuevaCategoria,
      src,
      alt
    };
    onActualizar(nuevoProducto);
    setEditando(false);
  }

  if (!estado) {
    return null; 
  }

  if (editando) {
    return (
      <div id="card" className="card m-6">
        <div className="card-body">
          <h4 className="card-title">Editar Producto</h4>
          <div className="form-group">
            <label>Título</label>
            <input
              type="text"
              className="form-control"
              value={nuevoTitulo}
              onChange={(e) => setNuevoTitulo(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Descripción</label>
            <textarea
              className="form-control"
              value={nuevaDescripcion}
              onChange={(e) => setNuevaDescripcion(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Precio</label>
            <input
              type="number"
              className="form-control"
              value={nuevoPrecio}
              onChange={(e) => setNuevoPrecio(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Categoría</label>
            <input
              type="text"
              className="form-control"
              value={nuevaCategoria}
              onChange={(e) => setNuevaCategoria(e.target.value)}
            />
          </div>
          <button onClick={guardarModificacion} className="btn btn-success mt-2">Guardar</button>
          <button onClick={cancelarModificacion} className="btn btn-secondary mt-2">Cancelar</button>
        </div>
      </div>
    );
  }

  return (
    <div id="card" className="card m-6 rounded-xl shadow">
      <div className="d-flex">
        <button onClick={eliminarProducto} id="cardCloseButton" className="rounded btn btn-danger m-2 shadow">X</button>
        <button onClick={modificarProducto} id="cardEditButton" className="w-auto h-auto rounded m-2 shadow">⚙</button> 
      </div>
      <img id="img-card" src={src} className="p-2 card-img-top shadow " alt={alt} />
      <div id="cardBody" className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
        <div className="d-flex">
          <h5 className="mx-2">Precio: </h5>
          <span className="card-text">{precio}</span>
        </div>
        <div className="d-flex">
          <h5 className="mx-2">Categoría: </h5>
          <span className="card-text">{categoria}</span>
        </div>
      </div>
    </div>
  );
}

export default Producto;
