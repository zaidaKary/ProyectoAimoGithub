import React from 'react';
import style from '../../css/style.module.css';

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.iconHeader}>
        <div className={style.github}>
          <i className="fab fa-github" />
        </div>
        <p className={style.txtgithub}>Github</p>
      </div>
    </div>
  );
};
export default Header;
