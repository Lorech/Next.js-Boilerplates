'use client';

import Image from 'next/image';
import { FormattedMessage } from 'react-intl';

import VercelLogo from '@public/vercel.svg';

import classes from './header.module.scss';

function Header() {
  return (
    <div className={classes.root}>
      <p className={classes.text}>
        <FormattedMessage
          id={'index.getStarted'}
          defaultMessage={'Get started by editing'}
        />
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
          <FormattedMessage id={'index.by'} defaultMessage={'By'} />{' '}
          <Image
            src={VercelLogo}
            alt="Vercel Logo"
            className={classes.image}
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </div>
  );
}

export default Header;
