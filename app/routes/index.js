const smsMgtRoutes = require('./smsMgtRoutes');

// Configure routes
const routes = (router) => {
    smsMgtRoutes(router);
};

module.exports = routes;
