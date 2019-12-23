import React from 'react';
import { Link } from 'react-router-dom';
import style from '../../css/style.module.css';

const BtnConsultar = () => (
  <div className={style.btnconsultamovil}>
    <Link to="/">
      <button className={`btn btn-outline-success my-2 my-sm-0 ${style.btnconsulta}`} type="submit">
        <p className={style.textsearch}>
          Search again
        </p>
      </button>
    </Link>
  </div>
);
export default BtnConsultar;
