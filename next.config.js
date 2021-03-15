const data = require('./utils/projectsData');

//   This configuration maps / to the Next.js page that is served for the / route, and that is the pages/index.js page file.

module.exports = {
  trailingSlash: true,
  exportPathMap: async function () {
    const { projects } = data;
    const paths = {
      '/': { page: '/' },
    };

    projects.forEach((project) => {
      paths[`/project/${project.slug}`] = {
        page: '/project/[path]',
        query: { path: project.slug },
      };
    });

    return paths;
  },
};

// Next.js only generated the home page based on the application configuration.
// The exportPathMap function is an async function, so you can make a request to an API in this function and use the returned list to generate the paths.