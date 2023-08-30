/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['src/styles'],
    prependData: `@import '_breakpoints';`,
  },
};
