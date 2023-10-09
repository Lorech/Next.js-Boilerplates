import Image from 'next/image';

import { getI18n } from '@intl/server';
import VercelLogo from '@public/vercel.svg';

import classes from './header.module.scss';

const Header = async () => {
  const t = await getI18n();

  return (
    <div className={classes.root}>
      <p className={classes.text}>
        {t('index.getStarted')}
        &nbsp;
        <code className={classes.code}>src/app/page.tsx</code>
      </p>
      <div className={classes.imageWrapper}>
        <a
          className={classes.link}
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('index.by')}{' '}
          <Image
            src={VercelLogo}
            alt={t('index.vercelLogo')}
            className={classes.image}
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
