const expressPlayground = require('graphql-playground-middleware-express').default;

exports.onCreateDevServer = ({ app }) => {
  app.get('/___playground', expressPlayground({ endpoint: '/___graphql' }));
};
