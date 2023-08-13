'use client';

import { Inter } from 'next/font/google';
import { FormattedMessage } from 'react-intl';

const inter = Inter({ subsets: ['latin'] });

function Footer() {
  return (
    <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
      <a
        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
          <FormattedMessage id="index.docs" defaultMessage={'Docs'} />{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}>
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
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
          <FormattedMessage id={'index.learn'} defaultMessage={'Learn'} />{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}>
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
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
          <FormattedMessage
            id={'index.templates'}
            defaultMessage={'Templates'}
          />{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}>
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
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
          <FormattedMessage id={'index.deploy'} defaultMessage={'Deploy'} />{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}>
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
