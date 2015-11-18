let config = function($stateProvider, $urlRouterProvider) {
  

  $urlRouterProvider.otherwise('/users/add');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.users', {
      url: '/users',
      controller: 'UserController as vm',
      templateUrl: 'templates/users.tpl.html'
    })
    .state('root.addUser', {
      url: '/users/add',
      controller: 'AddController as vm',
      templateUrl: 'templates/form.tpl.html'
    });


};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;