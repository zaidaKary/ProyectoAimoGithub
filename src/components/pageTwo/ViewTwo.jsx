import React from 'react';
import Informacion from './Informacion.jsx';
import Header from '../pageOne/Header.jsx';
import style from '../../css/style.module.css';
import BtnConsultar from './BtnConsultar.jsx';

const ViewTwo = ({history}) => {
  const urlParams = new URLSearchParams(window.location.search);
  // URLSearchParams -> obtiene la cadena de consulta de una URL.
  // console.log(urlParams);
  const usuario = urlParams.get('termino');
  // console.log(urlParams.get('termino'));
  return (
    <div className={style.viewone}>
      <div className={style.headertwo}>
        <Header />
        <BtnConsultar />
      </div>
      { usuario === '' ? history.replace('/') : <><Informacion usuario={usuario} /></>}
    </div>
  );
};

export default ViewTwo;
