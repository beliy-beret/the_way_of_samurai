import React from 'react';
import style from './homePage.module.css';

export default function Home() {
  return (
    <section className={style.homepage}>
      <h2 className={style.pageTitle}>The way of the Samurai.</h2>
      <p className={style.appDescription}>
        This application is based on the lessons of Dmitry Kuzyuberdin. If you
        are want to check authorization options, you can use test data or create
        your own account on the site{' '}
        <a href="https://social-network.samuraijs.com/">Social Network API</a>.
        If you are want check all options you must buy a license or contact with
        me.
      </p>
      <div className={style.testData}>
        <span>email: free@samuraijs.com</span>
        <span>password: free</span>
      </div>
      <div className={style.technologies}>
        <img
          src="https://it-black.ru/wp-content/uploads/2017/08/javscript.png"
          alt="JS"
        />
        <img
          src="https://static-sl.insales.ru/images/articles/1/6852/375492/react.png"
          alt="React"
        />
        <img
          src="https://teachmeonline.net/wp-content/uploads/2020/11/React-redux-.png"
          alt="Redux"
        />
      </div>
    </section>
  );
}
