import classNames from 'classnames';
import { Inter } from 'next/font/google';

import { getI18n } from '@intl/server';

import classes from './footer.module.scss';

const inter = Inter({ subsets: ['latin'] });

const Footer = async () => {
  const t = await getI18n();

  return (
    <div className={classNames(classes.root, inter.className)}>
      <a
        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
        className={classes.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={classes.heading}>
          {t('index.docs')} <span className={classes.arrow}>-&gt;</span>
        </h2>
        <p className={classes.description}>{t('index.docsDescription')}</p>
      </a>

      <a
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
        className={classes.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={classes.heading}>
          {t('index.learn')} <span className={classes.arrow}>-&gt;</span>
        </h2>
        <p className={classes.description}>{t('index.learnDescription')}</p>
      </a>

      <a
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
        className={classes.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={classes.heading}>
          {t('index.templates')} <span className={classes.arrow}>-&gt;</span>
        </h2>
        <p className={classes.description}>{t('index.templatesDescription')}</p>
      </a>

      <a
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
        className={classes.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={classes.heading}>
          {t('index.deploy')} <span className={classes.arrow}>-&gt;</span>
        </h2>
        <p className={classes.description}>{t('index.deployDescription')}</p>
      </a>
    </div>
  );
};

export default Footer;
