import { FC } from 'react';
import styles from './rightcolumn.module.css';

const stack: string[] = [
  'TypeScript',
  'JavaScript',
  'React',
  'Redux',
  'Vite',
  'Webpack',
  'Parcel',
  'HTML',
  'CSS(SASS)',
  'Jest',
  'Cypress',
  'GIT',
];

const renderedStack: JSX.Element[] = stack.map((item, index) => (
  <div key={index} className={styles.stackCont}>
    <span className={styles.stackItem}>{item}</span>
  </div>
));

export const RightColumn: FC = () => {
  return (
    <div>
      <div className={styles.block}>
        <h2>Стек</h2>
        <div className={styles.stackBox}>{renderedStack}</div>
        <div>
          <h2>Языки</h2>
          <span>Английский B2 (Средне-продвинутый)</span>
        </div>
      </div>
    </div>
  );
};
