import { FC, MouseEvent } from 'react';
import styles from './portfolio.module.css';
import wwwLink from '../../../assets/img/web_portfolio.svg';
import gitHubLink from '../../../assets/img/github_portfolio.svg';

export const Portfolio: FC = () => {
  const openPageWithDelay = (url: string): void => {
    setTimeout(() => {
      window.open(url, '_blank');
    }, 500);
  };
  const handleButtonClick =
    (url: string) =>
    (event: MouseEvent): void => {
      event.preventDefault();
      openPageWithDelay(url);
    };

  return (
    <div className={styles.box}>
      <h2>Портфолио</h2>
      <div className={styles.portBox}>
        <div className={`${styles.itemBox} ${styles.blanchard}`}>
          <div className={`${styles.cardLinkBox} `}>
            <a
              href="http://mmm-blanchard.tmweb.ru"
              onClick={handleButtonClick('http://mmm-blanchard.tmweb.ru')}
            >
              <img src={wwwLink} alt="go to web site" />
            </a>
            <a
              href="https://github.com/MizhGun89/blanchard"
              onClick={handleButtonClick(
                'https://github.com/MizhGun89/blanchard'
              )}
            >
              <img src={gitHubLink} alt="go to github" />
            </a>
          </div>
        </div>
        <div className={`${styles.itemBox} ${styles.bank}`}>
          <div className={styles.cardLinkBox}>
            <a
              href="https://prommm.ru"
              onClick={handleButtonClick('https://prommm.ru')}
            >
              <img src={wwwLink} alt="go to web site" />
            </a>
            <a
              href="https://github.com/MizhGun89/Bank"
              onClick={handleButtonClick(
                'https://github.com/MizhGun89/Bank'
              )}
            >
              <img src={gitHubLink} alt="go to github" />
            </a>
          </div>
        </div>
        <div className={`${styles.itemBox} ${styles.shining}`} />
      </div>
    </div>
  );
};
