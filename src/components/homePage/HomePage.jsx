import React from 'react';
import style from './homeStyle.module.css';

export default function Home() {
  return (
    <section className={style.homepage}>
      <h2 className={style.pageTitle}>The way of the samurai.</h2>
      <p className={style.appDescription}>
        This application is based on the lessons of Dmitry Kuzyuberdin. To check
        the full functionality of the application, you need to register on the
        website{' '}
        <a href="https://social-network.samuraijs.com" target="blank">
          Social-network.samuraijs.com
        </a>{' '}
        and then go through authorization in the application. You can also use
        test data
      </p>
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
