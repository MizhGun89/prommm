import { FC } from 'react';
import styles from './leftcolumn.module.css';

export const LeftColumn: FC = () => {
  return (
    <div className={styles.leftColumn}>
      <h2>Опыт</h2>
      <div className={styles.firmContainer}>
        <h3 className={styles.titleFirm}>ООО "Ромашка"</h3>
        <h4 className={styles.proffFirm}>Нюхатель ромашек</h4>
        <p className={styles.aboutFirm}>
          На работе я занимался тем, что ходил и нюхал ромашки. Достиг в этом
          деле высокого профессионализма.
        </p>
      </div>
      <div className={styles.firmContainer}>
        <h3 className={styles.titleFirm}>ООО "Пиццулька"</h3>
        <h4 className={styles.proffFirm}>Пиццерийный сомелье</h4>
        <p className={styles.aboutFirm}>
          На работе я занимался тем, что кушал разные пиццы. Много. Достиг в
          этом деле глубокого опнимания проццесса.
        </p>
      </div>
      <h2>Образование</h2>
      <div className={styles.firmContainer}>
        <h4 className={styles.proffFirm}>
          ЧОУ ДПО «Образовательные технологии «Скилбокс»
        </h4>
        <p className={styles.aboutFirm}>Frontend-разработчик с нуля до PRO</p>
        <p className={styles.aboutFirm}>(2022-2024)</p>
      </div>
      <div className={styles.firmContainer}>
        <h4 className={styles.proffFirm}>
          Уральский федеральный университет имени первого Президента России Б.Н.
          Ельцина
        </h4>
        <p className={styles.aboutFirm}>
          Дистанционного образования, Экономика и управление на предприятие
          машиностроения
        </p>
        <p className={styles.aboutFirm}>(2008-2013)</p>
      </div>
    </div>
  );
};
