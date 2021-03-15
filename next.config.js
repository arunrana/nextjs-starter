module.exports = {
    trailingSlash: true,
    exportPathMap: function() {
      return {
        '/': { page: '/' }
      };
    }
  };

//   This configuration maps / to the Next.js page that is served for the / route, and that is the pages/index.js page file.