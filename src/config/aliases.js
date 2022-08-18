const aliases = (prefix = `./src`) => ({
  '@hooks': `${prefix}/hooks/`,
  '@components': `${prefix}/components/`,
  '@context': `${prefix}/context/`,
  '@utilities': `${prefix}/utilities/`,
  '@assets': `${prefix}/assets/`,
  '@api': `${prefix}/api/`,
  "@pages": `${prefix}/pages/`,
  "@config": `${prefix}/config/`,
  "@global-style": `${prefix}/globalStyle/`,
});

module.exports = aliases;
