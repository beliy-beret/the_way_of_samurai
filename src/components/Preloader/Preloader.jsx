import React from 'react';
import style from './preloader.module.css';
import rocket from '../../images/rocket.gif';
export default function Preloader() {
  return (
    <div className={style.preloader}>
      <img src={rocket} alt="rocket" />
    </div>
  );
}
