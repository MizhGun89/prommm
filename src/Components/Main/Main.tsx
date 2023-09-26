import { FC } from 'react';
import styles from './main.module.css';
import { Thread } from './Thread';
import { Portfolio } from './Portfolio';
import superhero from '../../assets/img/bottomEmoj.png';

export const Main: FC = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Михаил Михайлов </h1>
      <p className={styles.titleProff}>Frontend- разработчик</p>
      <div className={styles.aboutBox}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
        porro error vero et, amet facere maxime dignissimos temporibus rerum
        quos, est repellendus neque tempore consequatur pariatur reprehenderit
        esse aliquam doloremque!
      </div>
      <Thread />
      <Portfolio />
      <img src={superhero} alt="" className={styles.superhero} />
    </main>
  );
};
