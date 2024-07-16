import React, { useState, useEffect } from 'react';

function BuscarProducto({ productos, setProductosFiltrados }) {
  const [busqueda, setBusqueda] = useState('');
  const [tipoBusqueda, setTipoBusqueda] = useState('nombre'); // 'nombre' o 'categoria'

  useEffect(() => {
    if (!busqueda.trim()) {
      setProductosFiltrados(productos);
      return;
    }

    const resultadosFiltrados = productos.filter(producto => {
      const textoBusqueda = busqueda.toLowerCase();
      if (tipoBusqueda === 'nombre') {
        return producto.nombre.toLowerCase().includes(textoBusqueda);
      } else {
        return producto.categoria.toLowerCase().includes(textoBusqueda);
      }
    });

    setProductosFiltrados(resultadosFiltrados);
  }, [busqueda, tipoBusqueda, productos, setProductosFiltrados]);

  return (
    <form>
      <div className="mb-3">
        <h4>Buscar por:</h4>
        <div>
          <label className="form-check-label mx-2" htmlFor="nombre">Nombre</label>
          <input
            type="radio"
            name="buscarPor"
            id="nombre"
            checked={tipoBusqueda === 'nombre'}
            onChange={() => setTipoBusqueda('nombre')}
          />
        </div>
        <div>
          <label className="form-check-label mx-2" htmlFor="categoria">Categoría</label>
          <input
            type="radio"
            name="buscarPor"
            id="categoria"
            checked={tipoBusqueda === 'categoria'}
            onChange={() => setTipoBusqueda('categoria')}
          />
        </div>
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          placeholder="Escribe para buscar..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>
    </form>
  );
}

export default BuscarProducto;
