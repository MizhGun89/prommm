import { FC } from 'react';
import styles from './thread.module.css';
import { LeftColumn } from './LeftColumn';
import { RightColumn } from './RightColumn';

export const Thread: FC = () => {
  return (
    <div className={styles.threads}>
      <LeftColumn />
      <RightColumn />
    </div>
  );
};
