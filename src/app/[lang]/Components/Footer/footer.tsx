'use client';

import classNames from 'classnames';
import { Inter } from 'next/font/google';
import { FormattedMessage } from 'react-intl';

import classes from './footer.module.scss';

const inter = Inter({ subsets: ['latin'] });

function Footer() {
  return (
    <div className={classNames(classes.root, inter.className)}>
      <a
        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
        className={classes.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={classes.heading}>
          <FormattedMessage id="index.docs" defaultMessage={'Docs'} />{' '}
          <span className={classes.arrow}>-&gt;</span>
        </h2>
        <p className={classes.description}>
          <FormattedMessage
            id={'index.docsDescription'}
            defaultMessage={
              'Find in-depth information about Next.js features and API.'
            }
          />
        </p>
      </a>

      <a
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
        className={classes.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={classes.heading}>
          <FormattedMessage id={'index.learn'} defaultMessage={'Learn'} />{' '}
          <span className={classes.arrow}>-&gt;</span>
        </h2>
        <p className={classes.description}>
          <FormattedMessage
            id={'index.learnDescription'}
            defaultMessage={
              'Learn about Next.js in an interactive course with quizzes!'
            }
          />
        </p>
      </a>

      <a
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
        className={classes.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={classes.heading}>
          <FormattedMessage
            id={'index.templates'}
            defaultMessage={'Templates'}
          />{' '}
          <span className={classes.arrow}>-&gt;</span>
        </h2>
        <p className={classes.description}>
          <FormattedMessage
            id={'index.templatesDescription'}
            defaultMessage={
              'Discover and deploy boilerplate example Next.js projects.'
            }
          />
        </p>
      </a>

      <a
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
        className={classes.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={classes.heading}>
          <FormattedMessage id={'index.deploy'} defaultMessage={'Deploy'} />{' '}
          <span className={classes.arrow}>-&gt;</span>
        </h2>
        <p className={classes.description}>
          <FormattedMessage
            id={'index.deployDescription'}
            defaultMessage={
              'Instantly deploy your Next.js site to a shareable URL with Vercel.'
            }
          />
        </p>
      </a>
    </div>
  );
}

export default Footer;
