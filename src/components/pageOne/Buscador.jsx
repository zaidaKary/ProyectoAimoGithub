import React, { useState } from 'react';
import style from '../../css/style.module.css';

const Buscador = ({history}) => {
  const [userInput, setUserInput] = useState('');
  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    history.replace(`/Busqueda?termino=${userInput}`);
  };
  return (
    <div className="container">
      <form className={`form-inline ${style.center}`} onSubmit={handleSubmit}>
        <input className={`form-control mr-sm-2 ${style.inputsearch}`} placeholder="Example: 'zaidaKary'" onChange={handleSearch} />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          <i className="fas fa-search" />
        </button>
      </form>
    </div>
  );
};
export default Buscador;
