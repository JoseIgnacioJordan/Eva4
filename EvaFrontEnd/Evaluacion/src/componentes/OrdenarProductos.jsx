import React, { useState, useEffect } from 'react';

function OrdenarProductos({ productos, setProductosFiltrados }) {
  const [orden, setOrden] = useState('');
  const [direccion, setDireccion] = useState('asc');

  useEffect(() => {
    ordenarProductos();
  }, [orden, direccion, productos]);

  const ordenarProductos = () => {
    const productosOrdenados = [...productos].sort((a, b) => {
      if (orden === 'nombre') {
        return direccion === 'asc' ? a.nombre.localeCompare(b.nombre) : b.nombre.localeCompare(a.nombre);
      } else if (orden === 'precio') {
        // Convertir precios a números antes de comparar
        const precioA = parseFloat(a.precio.replace(/\./g, '').replace(',', '.'));
        const precioB = parseFloat(b.precio.replace(/\./g, '').replace(',', '.'));
        return direccion === 'asc' ? precioA - precioB : precioB - precioA;
      } else if (orden === 'categoria') {
        return direccion === 'asc' ? a.categoria.localeCompare(b.categoria) : b.categoria.localeCompare(a.categoria);
      }
      return 0;
    });
    setProductosFiltrados(productosOrdenados);
  };

  return (
    <>
      <h4>Ordenar Por:</h4>
      <div className='w-50 d-flex flex-column'>
        <div className="d-flex align-items-center mb-2">
          <input type="radio" name="ordenar" id="botonNombreAsc" onChange={() => {
            setOrden('nombre');
            setDireccion('asc');
          }} />
          <label htmlFor="botonNombreAsc" className="ms-2">Nombre Asc</label>
        </div>
        <div className="d-flex align-items-center mb-2">
          <input type="radio" name="ordenar" id="botonNombreDesc" onChange={() => {
            setOrden('nombre');
            setDireccion('desc');
          }} />
          <label htmlFor="botonNombreDesc" className="ms-2">Nombre Desc</label>
        </div>
        <div className="d-flex align-items-center mb-2">
          <input type="radio" name="ordenar" id="botonPrecioAsc" onChange={() => {
            setOrden('precio');
            setDireccion('asc');
          }} />
          <label htmlFor="botonPrecioAsc" className="ms-2">Precio Asc</label>
        </div>
        <div className="d-flex align-items-center mb-2">
          <input type="radio" name="ordenar" id="botonPrecioDesc" onChange={() => {
            setOrden('precio');
            setDireccion('desc');
          }} />
          <label htmlFor="botonPrecioDesc" className="ms-2">Precio Desc</label>
        </div>
        <div className="d-flex align-items-center mb-2">
          <input type="radio" name="ordenar" id="botonCategoriaAsc" onChange={() => {
            setOrden('categoria');
            setDireccion('asc');
          }} />
          <label htmlFor="botonCategoriaAsc" className="ms-2">Categoría Asc</label>
        </div>
        <div className="d-flex align-items-center mb-2">
          <input type="radio" name="ordenar" id="botonCategoriaDesc" onChange={() => {
            setOrden('categoria');
            setDireccion('desc');
          }} />
          <label htmlFor="botonCategoriaDesc" className="ms-2">Categoría Desc</label>
        </div>
      </div>
    </>
  );
}

export default OrdenarProductos;
