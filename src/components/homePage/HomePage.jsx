import React from 'react';
import style from './homePage.module.css';
import javascript from '../../images/javascript.jpg';
import react from '../../images/react.jpg';
import redux from '../../images/redux.jpg';

export default function Home() {
  return (
    <section className={style.homepage}>
      <h2 className={style.pageTitle}>The way of the Samurai.</h2>
      <p className={style.appDescription}>
        This application is based on the lessons of Dmitry Kuzyuberdin. If you
        are want to check application options, you can use test data.
      </p>
      <div className={style.testData}>
        <span>email: free@samuraijs.com</span>
        <span>password: free</span>
      </div>
      <div className={style.technologies}>
        <img src={javascript} alt="JS" />
        <img src={react} alt="React" />
        <img src={redux} alt="Redux" />
      </div>
    </section>
  );
}
