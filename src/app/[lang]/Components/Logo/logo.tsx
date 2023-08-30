'use client';

import Image from 'next/image';
import { useIntl } from 'react-intl';

import NextLogo from '@public/next.svg';

import classes from './logo.module.scss';

function Logo() {
  const intl = useIntl();

  return (
    <div className={classes.root}>
      <Image
        className={classes.image}
        src={NextLogo}
        alt={intl.formatMessage({
          id: 'index.nextLogo',
          defaultMessage: 'Next.js Logo',
        })}
        width={180}
        height={37}
        priority
      />
    </div>
  );
}

export default Logo;
