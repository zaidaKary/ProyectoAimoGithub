import React from 'react';
import Buscador from './Buscador.jsx';
import Header from './Header.jsx';
import Logo from '../../img/logoGithub.png';
import Footer from './Footer.jsx';
import style from '../../css/style.module.css';

const ViewOne = ({history}) => {
  return (
    <div className={style.viewone}>
      <Header />
      <p className={style.txthome}>Enter Github username:</p>
      <Buscador history={history} />
      <img className={style.img} src={Logo} alt="Imagen de Github" />
      <Footer />
    </div>
  );
};
export default ViewOne;
