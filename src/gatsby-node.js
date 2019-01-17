const expressPlayground = require('graphql-playground-middleware-express').default;

exports.onCreateDevServer = ({ app }) => {
  app.get('/___playground', expressPlayground({ endpoint: '/___graphql' }));

  console.log('Your Gatsby GraphQL Playground is running on http://[YOUR_LOCALHOST]/___playground');
};
