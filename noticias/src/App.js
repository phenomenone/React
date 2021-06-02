import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';
import PropTypes from 'prop-types';

function App() {

  // definir la categoria y noticias
  const [ categoria, guardarCategoria ] = useState('');
  const [ noticias, guardarNoticias] = useState([]);

  useEffect(()=>{
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=c2f2a069c9f74aaca85825ac9924516c`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header 
        titulo='Buscador de Noticias'
      />

      <div className="container white">
        <Formulario 
          guardarCategoria={guardarCategoria}
        />

        <ListadoNoticias 
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

Formulario.propTypes = {
  guardarCategoria: PropTypes.func.isRequired
}

export default App;
