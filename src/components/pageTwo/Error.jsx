import React from 'react';
import style from '../../css/style.module.css';

const Error = (props) => {
  const errorMessage = props.userInput;
  return (
    <div>
      <p className={style.errormessage}>
      No results for your search:
        <br />
        " {errorMessage} "
      </p>
    </div>
  );
};
export default Error;
