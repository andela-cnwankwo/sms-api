const smsMgtRoutes = (router) => {
    // default route
    router.route('/')
        .get((req, res) => {
            res.status(200).send({message: 'Default Route!'});
        });
  };
  
  module.exports = smsMgtRoutes;
