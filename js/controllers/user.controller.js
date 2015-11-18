let UserController = function(UserService) {
  
  let vm = this;

  vm.title = 'User Info';

  vm.user = getUsers();

  function getUsers () {
    UserService.getUsers().then( (res) => {
      vm.user = res.data.results;
    });
  }

};

UserController.$inject = ['UserService'];

export default UserController;