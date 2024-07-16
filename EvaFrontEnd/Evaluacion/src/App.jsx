import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavLateral from './componentes/NavLateral';
import Producto from './componentes/Producto';
import ListaProductos from './ListaProductos';

function App() {
  const [productos, setProductos] = useState(() => {
    const datosLocales = localStorage.getItem('productos');
    return datosLocales ? JSON.parse(datosLocales) : ListaProductos;
  });

  useEffect(() => {
    localStorage.setItem('productos', JSON.stringify(productos));
  }, [productos]);

  const [productosFiltrados, setProductosFiltrados] = useState(ListaProductos);
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 6;

  const agregarProducto = (producto) => {
    const nuevosProductos = [...productos, producto];
    setProductos(nuevosProductos);
    setProductosFiltrados(nuevosProductos);
  };

  const eliminarProducto = (id) => {
    const nuevosProductos = productos.filter(producto => producto.id !== id);
    setProductos(nuevosProductos);
    setProductosFiltrados(nuevosProductos);
  };

  const actualizarProducto = (productoActualizado) => {
    const nuevosProductos = productos.map(producto =>
      producto.id === productoActualizado.id ? productoActualizado : producto
    );
    setProductos(nuevosProductos);
    setProductosFiltrados(nuevosProductos);
  };

  // Calcula los productos a mostrar en la página actual
  const indiceUltimoProducto = paginaActual * productosPorPagina;
  const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
  const productosActuales = productosFiltrados.slice(indicePrimerProducto, indiceUltimoProducto);

  // Calcula el número total de páginas
  const numeroTotalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);

  const cambiarPagina = (numeroPagina) => {
    setPaginaActual(numeroPagina);
  };

  return (
    <div id="app" className='d-flex'>
      <NavLateral
        onAgregarProducto={agregarProducto}
        productos={productos}
        setProductosFiltrados={setProductosFiltrados}
      />

      <main id="main" className='col flex-grow-1 d-flex flex-column align-items-center'>
        <nav id="navBar" className='position-fixed w-100 z-2 shadow'>
          <h1 className='text-center m-2'>Gestión de Productos</h1>
        </nav>
        <div id="containerProductos" className='container'>
          <div className='row'>
            {productosActuales.map((producto) => (
              <div key={producto.id} className='m-8 col-12 col-lg-6 col-xl-4 mb-4'>
                <Producto
                  id={producto.id}
                  src={producto.src}
                  alt={producto.nombre}
                  title={producto.nombre}
                  description={producto.description}
                  precio={producto.precio}
                  categoria={producto.categoria}
                  onEliminar={() => eliminarProducto(producto.id)}
                  onActualizar={actualizarProducto}
                />
              </div>
            ))}
          </div>
          <div className='d-flex justify-content-center mt-4'>
            <nav>
              <ul className='pagination'>
                {Array.from({ length: numeroTotalPaginas }, (_, index) => (
                  <li key={index + 1} className={`page-item ${paginaActual === index + 1 ? 'active' : ''}`}>
                    <button className='page-link' onClick={() => cambiarPagina(index + 1)}>
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
