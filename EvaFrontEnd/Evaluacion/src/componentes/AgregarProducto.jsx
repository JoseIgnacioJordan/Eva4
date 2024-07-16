import React, { useState } from 'react';

function AgregarProducto({ onAgregarProducto }) {
  const [nombre, setNombre] = useState('');
  const [urlImagen, setUrlImagen] = useState('');
  const [categoria, setCategoria] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [agregado, setAgregado] = useState(false);

  const handlePrecioChange = (e) => {
    const value = e.target.value;
    if (value === '' || (parseFloat(value) >= 0 && !isNaN(value))) {
      setPrecio(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoProducto = {
      id: Date.now(), // Use a more reliable method for unique IDs
      nombre,
      src: urlImagen,
      categoria,
      precio: parseFloat(precio), // Parse price to a float number
      description: descripcion
    };
    onAgregarProducto(nuevoProducto);
    setNombre('');
    setUrlImagen('');
    setCategoria('');
    setPrecio('');
    setDescripcion('');
    setAgregado(true);
    setTimeout(() => setAgregado(false), 3000); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <hr className="text-white"/>
      <label className="text-black mx-2 row" htmlFor="nombre_producto">Nombre Producto:</label>
      <input 
        required 
        className="mb-3 mx-2 rounded" 
        type="text" 
        name="nombre_producto" 
        id="nombre_producto"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)} 
      />
      <br />
      <label className="text-black mx-2 row" htmlFor="url_imagen_producto">Url Imagen Producto:</label>
      <input 
        required 
        className="mb-3 mx-2 rounded" 
        type="text" 
        name="url_imagen_producto" 
        id="url_imagen_producto"
        value={urlImagen}
        onChange={(e) => setUrlImagen(e.target.value)} 
      />
      <br />
      <label className="text-black mx-2 row" htmlFor="categoria_producto">Categoría Producto:</label>
      <input 
        required 
        className="mb-3 mx-2 rounded" 
        type="text" 
        name="categoria_producto" 
        id="categoria_producto"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)} 
      />
      <br />
      <label className="text-black mx-2 row" htmlFor="precio_producto">Precio Producto (sin puntos):</label>
      <input 
        required 
        className="mb-3 mx-2 rounded" 
        type="text" 
        name="precio_producto" 
        id="precio_producto"
        value={precio}
        onChange={handlePrecioChange} 
      />
      <br />
      <label className="text-black mx-2 row" htmlFor="descripcion_producto">Descripción Producto:</label>
      <textarea 
        required 
        className="mb-3 mx-2 rounded" 
        name="descripcion_producto" 
        id="descripcion_producto"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)} 
      />
      <br />
      <button id="botonAgregar" type="submit" className="btn btn-primary">Agregar</button>
      {agregado && 
        <div id="mensajeDeAgregado" className='p-1 m-1 rounded'>
          <p className="text-success mt-3">Producto agregado exitosamente!</p>
        </div>}
    </form>
  );
}

export default AgregarProducto;
