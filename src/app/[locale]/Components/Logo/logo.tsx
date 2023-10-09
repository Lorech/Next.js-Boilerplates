import Image from 'next/image';

import { getI18n } from '@intl/server';
import NextLogo from '@public/next.svg';

import classes from './logo.module.scss';

const Logo = async () => {
  const t = await getI18n();

  return (
    <div className={classes.root}>
      <Image
        className={classes.image}
        src={NextLogo}
        alt={t('index.nextLogo')}
        width={180}
        height={37}
        priority
      />
    </div>
  );
};

export default Logo;
