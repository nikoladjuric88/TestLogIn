exports.config = {

  seleniumAdress: 'http://localhost:4444/wd/hub', 	

  specs: ['todo-spec.js'],

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};